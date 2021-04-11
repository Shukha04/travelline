import styled from 'styled-components'
import { Parallax } from 'react-parallax'
import Container from '../components/Container'
import Fly from '../images/fly.jpg'
import Features from '../components/Features'

const textEn = [
  'provides only the best tours',
  'We, a young travel agency with great ambitions and potential, are ready to provide you with the best tours filled with unforgettable emotions and impressions. Our company provides you with all the necessary documents for traveling around the world.'
]

const textRu = [
  'предоставляет только лучшие туры',
  'Мы, молодое туристическое агентство с большими амбициями и потенциалом, готовы предоставить вам лучшие туры, наполненные незабываемыми эмоциями и впечатлениями. Наша компания предоставляет вам все необходимые документы для путешествий по миру.'
]

const textUz = [
  'faqat eng yaxshi ekskursiyalarni taqdim etadi',
  "Biz, katta ambitsiyalar va salohiyatga ega bo'lgan yosh sayyohlik agentligi, sizga unutilmas his-tuyg'ular va taassurotlar bilan to'ldirilgan eng yaxshi turlarni taqdim etishga tayyormiz. Kompaniyamiz sizga dunyo bo'ylab sayohat qilish uchun barcha kerakli hujjatlarni taqdim etadi."
]

const AboutSection = styled.section`
  padding-top: 60px;
`

const ParallaxBox = styled(Parallax)`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(17, 39, 57, 0.3);
    z-index: 1;
  }
`

const MainText = styled(Container)`
  max-width: 700px;
  overflow: hidden;
  color: white;
  text-align: center;
  padding: 100px 15px;
  position: relative;
  z-index: 100;
`

const Title = styled.h2`
  font-size: 2.5em;
  font-weight: 600;
  text-transform: capitalize;
`

const Paragraph = styled.p`
  margin: 20px 0;
`

const SecondaryText = styled.span`
  color: #fc9b4c;
  text-transform: uppercase;
`

function About({ language }) {
  function text() {
    if (language === 'uz') return textUz
    else if (language === 'ru') return textRu
    else return textEn
  }

  return (
    <AboutSection id='about'>
      <ParallaxBox bgImage={Fly} bgImageAlt='Fly' strength={-300}>
        <MainText>
          <Title>
            <SecondaryText>TravelLine</SecondaryText> {text()[0]}
          </Title>
          <Paragraph>{text()[1]}</Paragraph>
        </MainText>
      </ParallaxBox>
      <Features language={language} />
    </AboutSection>
  )
}

export default About
