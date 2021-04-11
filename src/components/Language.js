import { useState } from 'react'
import styled from 'styled-components'

const Circle = styled.button`
  position: fixed;
  z-index: 99999;
  bottom: 25px;
  right: 25px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: #fc9b4c;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  padding: 5px;
  color: #112739;
  font-weight: 600;
  transition: all 0.5s ease;
  text-transform: uppercase;

  @keyframes slideLeft {
    0% {
      right: 25px;
    }
    100% {
      right: 100px;
    }
  }

  @keyframes slideLeftUp {
    0% {
      right: 25px;
      bottom: 25px;
    }
    100% {
      right: 75px;
      bottom: 75px;
    }
  }

  @keyframes slideUp {
    0% {
      bottom: 25px;
    }
    100% {
      bottom: 100px;
    }
  }
`

function Language({ language, changeLanguage }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <Circle onClick={() => setShow(!show)}>{language}</Circle>
      {show && (
        <>
          <Circle
            style={{ bottom: '100px', animation: 'slideUp .3s ease' }}
            onClick={() => {
              changeLanguage('en')

              setShow(false)
            }}
          >
            EN
          </Circle>
          <Circle
            style={{ bottom: '75px', right: '75px', animation: 'slideLeftUp .3s ease' }}
            onClick={() => {
              changeLanguage('ru')

              setShow(false)
            }}
          >
            RU
          </Circle>
          <Circle
            style={{ right: '100px', animation: 'slideLeft .3s ease' }}
            onClick={() => {
              changeLanguage('uz')

              setShow(false)
            }}
          >
            UZ
          </Circle>
        </>
      )}
    </>
  )
}

export default Language
