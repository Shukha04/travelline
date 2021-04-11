import { useHistory } from 'react-router'
import styled from 'styled-components'
import Button from './Button'

const Slide = styled.div`
  height: 100%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(17, 39, 57, 0.3);
  }
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`

const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #112739;
  color: white;
  transition: all 0.3s ease;
`

const Title = styled.h2`
  font-weight: 500;
`

function TourSlide({ tour, language }) {
  const history = useHistory()
  function text() {
    if (language === 'uz') return 'Tafsilotlar'
    else if (language === 'ru') return 'Детали'
    else return 'Details'
  }

  return (
    <Slide>
      <Image alt={tour.title} src={tour.image} />
      <Info>
        <Title>{tour.title}</Title>
        <Button onClick={() => history.push('/' + tour.m)}>{text()}</Button>
      </Info>
    </Slide>
  )
}

export default TourSlide
