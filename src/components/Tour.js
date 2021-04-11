import { AiOutlineClose } from 'react-icons/ai'
import { useHistory, useParams } from 'react-router'
import styled from 'styled-components'
import Container from './Container'

const detailsKeysEn = [
  'Description',
  'Pickup and destination',
  'Duration',
  'Way',
  'Plan',
  'days',
  'Day',
  'Price',
  'sum'
]
const detailsKeysRu = [
  'Описание',
  'Место подбора и назначения',
  'Длительность',
  'Путь',
  'План',
  'дней',
  'День',
  'Цена',
  'сум'
]
const detailsKeysUz = [
  'Tavsif',
  'Tanlangan joy va boradigan joy',
  'Muddati',
  "Yo'l",
  'Reja',
  'kun',
  'Kun',
  'Narxi',
  "so'm"
]

const BackGround = styled.div`
  position: fixed;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`

const MainBlock = styled.div`
  background-color: #112739;
  border-radius: 10px;
  color: #fff;
  height: calc(100vh - 30px);
  overflow: auto;
  margin-top: 15px;
  position: relative;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #fc9b4c;
  background-color: #112739;
  position: sticky;
  top: 0;
  padding: 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 600;
`

const Close = styled.span`
  font-size: 24px;
  color: red;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: rgba(255, 0, 0, 0.3);
  }
`

const Info = styled.main`
  padding: 10px 15px;
  margin-bottom: 50px;
`

const Image = styled.img.attrs({ alt: 'photo' })`
  width: 100%;
  height: 300px;
  background-color: #112739;
  object-fit: cover;
  object-position: bottom;
`

const Details = styled.ul`
  list-style: none;
`

const Detail = styled.li`
  margin-top: 10px;
`

const Text = styled.p`
  margin-top: 10px;
`

const Price = styled.h3`
  color: green;
  display: inline;
`

function Tour({ toursArray, language }) {
  const { tour } = useParams()
  const history = useHistory()

  const current = toursArray.filter(t => t.m === tour)[0]

  function detailsText() {
    if (language === 'uz') return detailsKeysUz
    else if (language === 'ru') return detailsKeysRu
    else return detailsKeysEn
  }

  const splittedPrice = current.price
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
    <BackGround>
      <Container>
        <MainBlock>
          <Top>
            <Title>{current.title}</Title>
            <Close onClick={() => history.push('/')}>
              <AiOutlineClose />
            </Close>
          </Top>
          <Info>
            <Image src={current.image} />
            <Details>
              <Detail>
                <b>{detailsText()[0]}:</b> {current.info}
              </Detail>
              <Detail>
                <b>{detailsText()[1]}:</b> {current.pickup} / {current.destination}
              </Detail>
              <Detail>
                <b>{detailsText()[2]}:</b> {current.plan.length} {detailsText()[5]}
              </Detail>
              <Detail>
                <b>{detailsText()[3]}:</b> {current.way.join(' > ')}
              </Detail>
              <Detail>
                <b>{detailsText()[7]}:</b>{' '}
                <Price>
                  {splittedPrice} {detailsText()[8]}
                </Price>
              </Detail>
              <Detail>
                <b>{detailsText()[4]}:</b>
              </Detail>
            </Details>
            {current.plan &&
              current.plan.map((p, i) => (
                <Text key={i}>
                  <b style={{ color: '#fc9b4c' }}>
                    {detailsText()[6]} {i + 1}:{' '}
                  </b>
                  {p}
                </Text>
              ))}
          </Info>
        </MainBlock>
      </Container>
    </BackGround>
  )
}

export default Tour
