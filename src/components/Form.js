import emailjs from 'emailjs-com'
import { ErrorMessage, Field, Form as FormikForm, Formik } from 'formik'
import { toast, ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'
import allTours from '../utils/tours'
import Button from './Button'

const FormBlock = styled(FormikForm)`
  display: grid;
  grid-gap: 30px;
`

const Title = styled.h2`
  font-size: 2.5em;
  font-weight: 600;
  text-transform: capitalize;
`

const Rules = styled.small`
  color: #fc9b4c;
`

const FormControl = styled.div`
  position: relative;
`

const Input = styled(Field)`
  padding: 10px;
  width: 100%;
  border-radius: 5px;

  &:focus ~ label,
  &:valid ~ label {
    color: white;
    font-size: 14px;
    top: -20px;
  }

  &:valid ~ label {
    color: #fc9b4c;
  }
`

const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  transition: all 0.3s ease-out;
`

const Error = styled(ErrorMessage).attrs({ component: 'small' })`
  color: #ee2e31;
`

const FormButton = styled(Button)`
  margin-left: auto;
  padding: 10px 30px;
`

const translations = {
  form: [
    [
      'Ekskursiyani rasmiylashtirish',
      'Ism:',
      'Elektron pochta:',
      'Ekskursiya:',
      'Yuborish',
      "so'm"
    ],
    ['Оформить заказ тура', 'Имя:', 'Эл. почта:', 'Тур:', 'Отправить', 'сум'],
    ['Order a tour', 'Name:', 'Email:', 'Tour:', 'Send', 'sum']
  ],
  errors: [
    ['Ismingizni yozing', 'Elektron pochta yozish kerak', 'Bu elektron pochta emas'],
    ['Введите имя', 'Введите эл. почту', 'Это не верная почта'],
    ['Name is required', 'Email is required', 'This is invalid email']
  ],
  success: [
    "Elektron pochtada to'lovni tasdiqlash",
    'Подтвердите оплату по почте',
    'Confirm payment by email'
  ],
  rules: [
    [
      "Siz to'laydigan kartada ko'rsatilgan ismni kiriting.",
      "Elektron pochtangizni kiriting, unga to'lov havolasi bo'lgan xat yuboriladi.",
      "Siz bron qilmoqchi bo'lgan sayohatni tanlang."
    ],
    [
      'Введите имя указанное на карте по которой будете оплачивать.',
      'Введите свою электронную почту, на нее придет письмо со ссылкой на оплату.',
      'Выберите тур который хотите заказать.'
    ],
    [
      'Enter the name indicated on the card by which you will pay.',
      'Enter your email, a letter with a link to payment will be sent to it.',
      'Choose the tour that you want to order.'
    ]
  ]
}

function Form({ language }) {
  function text() {
    if (language === 'uz') return translations.form[0]
    else if (language === 'ru') return translations.form[1]
    else return translations.form[2]
  }

  function errorMessages() {
    if (language === 'uz') return translations.errors[0]
    else if (language === 'ru') return translations.errors[1]
    else return translations.errors[2]
  }

  function toursArr() {
    if (language === 'uz') return allTours.uz
    else if (language === 'ru') return allTours.ru
    else return allTours.en
  }

  function successMessage() {
    if (language === 'uz') return translations.success[0]
    else if (language === 'ru') return translations.success[1]
    else return translations.success[2]
  }

  function template() {
    if (language === 'uz') return 'russian'
    else if (language === 'ru') return 'russian'
    else return 'english'
  }

  function rules() {
    if (language === 'uz') return translations.rules[0]
    else if (language === 'ru') return translations.rules[1]
    else return translations.rules[2]
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        tour: toursArr()[0].title + '/' + toursArr()[0].m + '/' + toursArr()[0].price * 100
      }}
      validate={values => {
        const errors = {}
        if (!values.name) {
          errors.name = errorMessages()[0] + '*'
        }

        if (!values.email) {
          errors.email = errorMessages()[1] + '*'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = errorMessages()[2] + '*'
        }

        return errors
      }}
      onSubmit={(values, { resetForm }) => {
        const tourParams = values.tour.split('/')
        const linkParams =
          'm=604757fc305a844d621304fc;ac.order=' +
          tourParams[1] +
          ';a=' +
          tourParams[2] +
          ';l=' +
          language +
          'c=https//travelline.herokuapp.com'

        const link = 'https://checkout.paycom.uz/' + Buffer.from(linkParams).toString('base64')
        emailjs
          .send(
            'travelline',
            template(),
            { ...values, tour: tourParams[0], link },
            'user_wd0qxeSvfhGgy9AVb7uyH'
          )
          .then(
            () =>
              toast.success(successMessage(), {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined
              }),
            err => console.log(err)
          )
        resetForm()
      }}
    >
      {({ values, handleChange }) => (
        <FormBlock>
          <Title>{text()[0]}</Title>
          <FormControl>
            <Input name='name' id='name' required />
            <Label htmlFor='name'>{text()[1]}</Label>
            <Rules>{rules()[0]}*</Rules> <Error name='name' />
          </FormControl>
          <FormControl>
            <Input name='email' id='email' required />
            <Label htmlFor='email'>{text()[2]}</Label>
            <Rules>{rules()[1]}*</Rules> <Error name='email' />
          </FormControl>
          <FormControl>
            <Input
              component='select'
              name='tour'
              id='tour'
              value={values.tour}
              onChange={handleChange}
            >
              {toursArr().map(t => {
                const splittedPrice = t.price
                  .toString()
                  .split('')
                  .reverse()
                  .join('')
                  .match(/.{1,3}/g)
                  .map(function (x) {
                    return x.split('').reverse().join('')
                  })
                  .reverse()
                  .join('.')
                return (
                  <option key={t.id} value={t.title + '/' + t.m + '/' + t.price * 100}>
                    {t.title}({t.destination}) - {splittedPrice + ' ' + text()[5]}
                  </option>
                )
              })}
            </Input>
            <Label htmlFor='message'>{text()[3]}</Label>
            <Rules>{rules()[2]}*</Rules>
          </FormControl>
          <FormButton type='submit'>{text()[4]}</FormButton>
          <ToastContainer style={{ zIndex: 999999 }} transition={Zoom} />
        </FormBlock>
      )}
    </Formik>
  )
}

export default Form
