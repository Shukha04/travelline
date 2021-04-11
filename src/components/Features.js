import { GiRibbonMedal, GiTwoCoins, RiVipFill } from 'react-icons/all'
import styled from 'styled-components'
import Container from './Container'

const FeaturesBlock = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 30px;
  padding: 50px 0;

  @media (max-width: 767px) {
    & {
      grid-template-columns: auto;
      padding: 50px 10%;
    }
  }
`

const Title = styled.h2`
  font-size: 2em;
  text-transform: capitalize;
  font-weight: 600;
  grid-column: 1 / 4;
  text-align: center;

  @media (max-width: 767px) {
    & {
      grid-column: 1/1;
    }
  }
`

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #112739;
  color: white;
  border-radius: 20px;
  padding: 20px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.75);
  }
`

const Paragraph = styled.p`
  font-size: 14px;
  opacity: 0.75;
  margin: 20px 0;
`

const allFeatures = [
  {
    id: 1,
    icon: GiRibbonMedal,
    text: [
      "Bizning maqsadimiz sizga eng yuqori darajadagi ekskursiya xizmatini ko'rsatish va biz sizga mos turni topish uchun qo'limizdan kelganini qilamiz",
      'Наша цель - предоставить вам туристические услуги высочайшего качества, и мы сделаем все возможное, чтобы найти для вас подходящий тур.',
      "Our aim is to provide you with the tour service of the top quality, and we'll do our best to find the suitable tour for you."
    ]
  },
  {
    id: 2,
    icon: RiVipFill,
    text: [
      "Sayohatni tashkil qilishda o'nlab jihatlarga e'tibor berish kerak va biz sizning sayohatingizda sizga kerak bo'lgan hamma narsani o'z ichiga olganligiga ishonch hosil qilamiz.",
      'При организации поездки нужно обратить внимание на десятки аспектов, и мы позаботимся о том, чтобы в ваш тур было включено все необходимое.',
      "There are dozens of aspects to pay attention to, while organizing a trip, and we'll make sure your tour includes everything you need."
    ]
  },
  {
    id: 3,
    icon: GiTwoCoins,
    text: [
      'Bizning barcha sayohatlarimiz va ekskursiyalarimiz haqiqatan ham arzon narxlarda mavjud, shuning uchun siz har doim ajoyib manzilni tanlashingiz mumkin.',
      'Все наши туры и экскурсии доступны по действительно доступным ценам, поэтому вы всегда можете выбрать отличное направление.',
      'All our tours and excursions are available at really affordable prices so you can always pick a great destination.'
    ]
  }
]

const translations = [
  'Nima uchun bizni tanlashingiz kerak?',
  'Почему вам стоит выбрать нас?',
  'Why you should choose us?'
]

function Features({ language }) {
  function text() {
    if (language === 'uz') return translations[0]
    else if (language === 'ru') return translations[1]
    else return translations[2]
  }

  function featuresTranslate(lang, featureArray) {
    if (lang === 'uz') return featureArray[0]
    else if (lang === 'ru') return featureArray[1]
    else return featureArray[2]
  }
  return (
    <FeaturesBlock>
      <Title>{text()}</Title>
      {allFeatures.map(feature => (
        <Feature key={feature.id}>
          <feature.icon
            style={{
              fontSize: '70px',
              border: '2px solid #FC9B4C',
              padding: '10px',
              borderRadius: '50%',
              color: '#FC9B4C'
            }}
          />
          <Paragraph>{featuresTranslate(language, feature.text)}</Paragraph>
        </Feature>
      ))}
    </FeaturesBlock>
  )
}

export default Features
