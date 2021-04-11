const { createServer } = require('http')
const express = require('express')
const path = require('path')
const { BillingErrors, RPCErrors } = require('./serverError')
require('dotenv').config()

const app = express()
const dev = app.get('env') !== 'production'

const normalizePort = port => parseInt(port, 10)
const PORT = normalizePort(process.env.PORT || 5000)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (!dev) {
  app.disable('x-powered-by')

  app.use(express.static(path.resolve(__dirname, 'build')))

  var Orders = {
    Italy: {
      amount: 8000000,
      state: 0
    },
    Russia: {
      amount: 9000000,
      state: 0
    },
    UAE: {
      amount: 13650000,
      state: 0
    },
    France: {
      amount: 10500000,
      state: 0
    },
    Uzbekistan: {
      amount: 2700000,
      state: 0
    }
  }
  var Transactions = {}
  var TransactionsGUI = 1
  const { PAYCOM_PASSWORD } = process.env

  const Billing = {
    CheckPerformTransaction: params => {
      var order = Orders[params.account.order]
      if (!order) {
        throw BillingErrors.OrderNotFound()
      }

      if (order.state !== 0) {
        throw BillingErrors.OrderAvailable()
      }

      if (order.amount * 100 !== params.amount) {
        throw BillingErrors.IncorrectAmount()
      }

      return {
        allow: true
      }
    },

    CreateTransaction: function (params) {
      var transaction = Transactions[params.id]

      if (transaction) {
        if (transaction.state !== 1) {
          throw BillingErrors.UnexpectedTransactionState()
        }

        return {
          state: transaction.state,
          create_time: transaction.create_time,
          transaction: transaction.transaction.toString()
        }
      }

      try {
        Billing.CheckPerformTransaction(params)
      } catch (error) {
        throw error
      }

      transaction = {
        id: params.id,
        time: params.time,
        state: 1,
        create_time: Date.now(),
        perform_time: 0,
        cancel_time: 0,
        transaction: TransactionsGUI++,
        order: params.account.order,
        reason: null
      }

      Transactions[params.id] = transaction

      var order = Orders[transaction.order]
      order.state = 1

      return {
        state: transaction.state,
        create_time: transaction.create_time,
        transaction: transaction.transaction.toString()
      }
    },

    PerformTransaction: function (params) {
      var transaction = Transactions[params.id]
      if (!transaction) {
        throw BillingErrors.TransactionNotFound()
      }

      if (transaction.state === 1) {
        var order = Orders[transaction.order]
        order.state = 2

        transaction.state = 2
        transaction.perform_time = Date.now()
      }

      if (transaction.state === 2) {
        return {
          state: transaction.state,
          perform_time: transaction.perform_time,
          transaction: transaction.transaction.toString()
        }
      }

      throw BillingErrors.UnexpectedTransactionState()
    },

    CancelTransaction: function (params) {
      var transaction = Transactions[params.id]
      if (!transaction) {
        throw BillingErrors.TransactionNotFound()
      }

      var order = Orders[transaction.order]

      if (transaction.state === 1) {
        transaction.state = -1
        transaction.reason = params.reason
        transaction.cancel_time = Date.now()

        order.state = 0
      }

      if (transaction.state === 2) {
        if (order.state === 3) {
          throw BillingErrors.OrderNotCanceled()
        }

        if (order.state === 2) {
          transaction.state = -2
          transaction.reason = params.reason
          transaction.cancel_time = Date.now()

          order.state = -2
        }
      }

      return {
        state: transaction.state,
        cancel_time: transaction.cancel_time,
        transaction: transaction.transaction.toString()
      }
    },

    CheckTransaction: function (params) {
      var transaction = Transactions[params.id]
      if (!transaction) {
        throw BillingErrors.TransactionNotFound()
      }

      return {
        state: transaction.state,
        create_time: transaction.create_time,
        perform_time: transaction.perform_time,
        cancel_time: transaction.cancel_time,
        transaction: transaction.transaction.toString(),
        reason: transaction.reason
      }
    }
  }

  function checkAuth(auth) {
    return (
      auth &&
      (auth = auth.trim().split(' ')) &&
      auth[0] === 'Basic' &&
      auth[1] &&
      (auth = new Buffer.from(auth[1], 'base64').toString('utf-8')) &&
      (auth = auth.trim().split(':')) &&
      auth[0] === 'Paycom' &&
      auth[1] === PAYCOM_PASSWORD
    )
  }

  app.post('/payment', (request, response) => {
    if (!checkAuth(request.headers['authorization'])) {
      return sendResponse(RPCErrors.AccessDenied(), null)
    }

    var id
    const data = request.body
    try {
      id = data.id
    } catch (e) {
      return sendResponse(RPCErrors.ParseError(), null)
    }

    if (!Billing[data.method]) {
      return sendResponse(RPCErrors.MethodNotFound(), null)
    }

    try {
      var result = Billing[data.method](data.params)
      sendResponse(null, result)
    } catch (error) {
      sendResponse(error, null)
    }

    function sendResponse(error, result) {
      response.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8'
      })

      response.end(
        JSON.stringify({
          jsonrpc: '2.0',
          error: error || undefined,
          result: result || undefined,
          id: id
        })
      )
    }
  })

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

const server = createServer(app)

server.listen(PORT, err => {
  if (err) throw err
  console.log('Server started!')
})
