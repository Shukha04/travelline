const RPCErrors = {
  TransportError: function () {
    return {
      code: -32300,
      message: {
        ru: 'Ошибка транспортации',
        en: 'Transport error',
        uz: 'Transport xatosi'
      },
      data: null
    }
  },

  AccessDenied: function () {
    return {
      code: -32504,
      message: {
        ru: 'Доступ запрещен',
        en: 'Access denied',
        uz: "Ruxsat yo'q"
      },
      data: null
    }
  },

  ParseError: function () {
    return {
      code: -32700,
      message: {
        ru: 'Ошибка парсинга',
        en: 'Parse error',
        uz: 'Ajralish xatosi'
      },
      data: null
    }
  },

  MethodNotFound: function () {
    return {
      code: -32601,
      message: {
        ru: 'Метод не найден',
        en: 'Method not found',
        uz: 'Usul topilmadi'
      },
      data: null
    }
  }
}

const BillingErrors = {
  TransactionNotFound: function () {
    return {
      code: -31003,
      message: {
        ru: 'Транзакция не найдена',
        en: 'Transaction not found',
        uz: 'Tranzaksiya topilmadi'
      },
      data: null
    }
  },

  UnexpectedTransactionState: function () {
    return {
      code: -31008,
      message: {
        ru: 'Статус транзакции не позволяет выполнить операцию',
        en: 'Transaction status does not allow the operation to be performed',
        uz: 'Tranzaksiya holati operatsiyani bajarishga imkon bermaydi'
      },
      data: null
    }
  },

  IncorrectAmount: function () {
    return {
      code: -31001,
      message: {
        ru: 'Неверная сумма заказа',
        en: 'Invalid order amount',
        uz: 'Buyurtma miqdori yaroqsiz'
      },
      data: null
    }
  },

  OrderNotFound: function () {
    return {
      code: -31050,
      message: {
        ru: 'Заказ не найден',
        en: 'Order not found',
        uz: 'Buyurtma xizmati yaroqsiz'
      },
      data: 'order'
    }
  },

  OrderAvailable: function () {
    return {
      code: -31051,
      message: {
        ru: 'Не возможно выполнить операцию. Заказ ожидает оплаты или оплачен.',
        en: 'Operation is not possible. The order is awaiting payment or has been paid.',
        uz: "Amal qilish mumkin emas. Buyurtma to'lovni kutmoqda yoki to'langan."
      },
      data: 'order'
    }
  },

  OrderNotCanceled: function () {
    return {
      code: -31007,
      message: {
        ru: 'Заказ полностью выполнен и не подлежит отмене.',
        en: 'The order is fully completed and cannot be canceled.',
        uz: "Buyurtma to'liq bajarilgan va bekor qilinishi mumkin emas."
      },
      data: null
    }
  }
}

module.exports = { RPCErrors, BillingErrors }
