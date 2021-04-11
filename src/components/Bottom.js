import styled from 'styled-components'

const BottomBlock = styled.div`
  padding: 15px;
  color: #fc9b4c;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const Line = styled.span`
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #fc9b4c;
  left: 0;
  z-index: 0;
`

const Info = styled.p`
  background-color: #112739;
  z-index: 10;
  position: relative;
  padding: 0 5px;

  & a {
    color: white;
    text-decoration: underline;
  }
`

const translations = [
  ['Muallif: ', 'Shuxrat'],
  ['Разработчик: ', 'Шухрат'],
  ['Designed by ', 'Shukhrat']
]

function Bottom({ language }) {
  function text() {
    if (language === 'uz') return translations[0]
    else if (language === 'ru') return translations[1]
    else return translations[2]
  }
  const year = new Date().getFullYear()

  return (
    <BottomBlock>
      <Line />
      <Info>
        © 2021{year > 2021 && ' - ' + year} | {text()[0]}
        <a href='https://www.instagram.com/__shukha__/?hl=ru' target='_blank' rel='noreferrer'>
          {text()[1]}
        </a>
      </Info>
    </BottomBlock>
  )
}

export default Bottom
