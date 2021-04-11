import styled from 'styled-components'
import Container from '../components/Container'
import HomeBackground from '../images/home.jpg'
import Button from '../components/Button'
import { scroller } from 'react-scroll'

const textEn = [
  'Discover wonderful World with',
  'We are committed to offering travel services of the highest quality, combining our energy and enthusiasm.',
  'Book a tour!'
]

const textRu = [
  'Откройте для себя чудесный мир вместе с',
  'Мы стремимся предлагать туристические услуги высочайшего качества, сочетая в себе нашу энергию и энтузиазм.',
  'Заказать тур!'
]

const textUz = [
  'ajoyib dunyoni kashf etishga yordam beradi',
  "Biz o'zimizning kuchimiz va g'ayratimizni birlashtirgan holda eng yuqori sifatli sayohat xizmatlarini taklif etishga sodiqmiz.",
  'Ekskursiya uchun buyurtma berish!'
]

const HomeSection = styled.section`
  height: 100vh;
  background-image: url(${HomeBackground});
  background-position: center;
  background-size: cover;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(17, 39, 57, 0.5);
  }
`

const HomeContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  position: relative;
`

const MainText = styled.main`
  max-width: 700px;
  color: white;
  border-left: 5px solid white;
  padding-left: 15px;
  overflow: hidden;

  & > * {
    animation: slideRight 0.5s ease-out;
  }
`

const Title = styled.h1`
  font-size: 3em;
  font-weight: 600;
  text-transform: capitalize;
`

const SecondaryText = styled.span`
  color: #fc9b4c;
  text-transform: uppercase;
`

const Paragraph = styled.p`
  margin: 20px 0;
`

function Home({ language }) {
  function text() {
    if (language === 'uz') return textUz
    else if (language === 'ru') return textRu
    else return textEn
  }
  return (
    <HomeSection id='home'>
      <HomeContainer>
        <MainText>
          <Title>
            {text()[0]} <SecondaryText>TravelLine</SecondaryText>
          </Title>
          <Paragraph>{text()[1]}</Paragraph>
          <Button
            onClick={() =>
              scroller.scrollTo('tours', {
                smooth: true,
                duration: 500,
                spy: true,
                isDynamic: true
              })
            }
          >
            {text()[2]}
          </Button>
        </MainText>
      </HomeContainer>
    </HomeSection>
  )
}

export default Home
