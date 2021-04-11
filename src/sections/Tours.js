import styled from 'styled-components'
import Container from '../components/Container'
import ToursSlider from '../components/ToursSlider'

const textEn = [
  'Featured tours',
  'Explore the world with TravelLine! We offer you a vast variety of tours of all types featuring both exotic and already well-known destinations, some of which are listed below.'
]

const textRu = [
  'Рекомендуемые туры',
  'Исследуй мир вместе с TravelLine! Мы предлагаем вам широкий выбор туров всех типов, включающих как экзотические, так и уже известные направления, некоторые из которых перечислены ниже.'
]

const textUz = [
  'Taniqli ekskursiyalar',
  "TravelLine yordamida dunyoni kashf eting! Biz sizga ekzotik va taniqli yo'nalishlarni aks ettiruvchi barcha turdagi ekskursiyalarni taklif qilamiz, ularning ba'zilari quyida keltirilgan."
]

const ToursSection = styled.section`
  padding: 100px 0;
  text-align: center;
`

const ToursContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainText = styled.main`
  max-width: 700px;
  overflow: hidden;
  color: #112739;
`

const Title = styled.h2`
  font-size: 2.5em;
  font-weight: 600;
  text-transform: capitalize;
  border-bottom: 3px solid #112739;
`

const Paragraph = styled.p`
  margin: 20px 0;
`

function Tours({ language, tours }) {
  function text() {
    if (language === 'uz') return textUz
    else if (language === 'ru') return textRu
    else return textEn
  }
  return (
    <ToursSection id='tours'>
      <ToursContainer>
        <MainText>
          <Title>{text()[0]}</Title>
          <Paragraph>{text()[1]}</Paragraph>
        </MainText>
        <ToursSlider language={language} tours={tours} />
      </ToursContainer>
    </ToursSection>
  )
}
export default Tours
