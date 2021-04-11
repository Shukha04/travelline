import {
  FaFacebookSquare,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  IoMailOutline
} from 'react-icons/all'
import styled from 'styled-components'
import Bottom from './Bottom'
import Container from './Container'
import Form from './Form'

const FooterBlock = styled.footer`
  background-color: #112739;
  color: white;
`

const FooterContainer = styled(Container)`
  padding: 50px 15px;
  display: grid;
  grid-template-columns: 40% 40%;
  justify-content: space-between;
  grid-gap: 30px;

  @media (max-width: 991px) {
    & {
      grid-template-columns: 50% 50%;
    }
  }

  @media (max-width: 767px) {
    & {
      grid-template-columns: auto;
      justify-content: center;
    }
  }
`

const Contacts = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
`

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fc9b4c;
  margin: 10px 0;
  font-size: 30px;
`

const LinkTo = styled.a`
  color: inherit;
  margin-left: 10px;
`

const SocialNetwork = styled.a`
  color: inherit;
  font-size: 35px;
  width: 35px;
  height: 35px;
  margin: 0 20px;
`

const translations = ["Aloqada bo'lish", 'Связаться', 'Get in touch']

function Footer({ language }) {
  function text() {
    if (language === 'uz') return translations[0]
    else if (language === 'ru') return translations[1]
    else return translations[2]
  }
  return (
    <FooterBlock>
      <FooterContainer>
        <Form language={language} />
        <Contacts>
          <Item>
            <Title>{text()}</Title>
          </Item>
          <Item>
            <FaPhoneAlt /> <LinkTo href='tel:+998993105321'>+998 99-310-53-21</LinkTo>
          </Item>
          <Item>
            <IoMailOutline />{' '}
            <LinkTo href='mailto:thebesttravelline@gmail.com'>thebesttravelline@gmail.com</LinkTo>
          </Item>
          <Item>
            <SocialNetwork
              href='https://www.instagram.com/get_visa_/'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram />
            </SocialNetwork>
            <SocialNetwork href='https://twitter.com/TravelLine11' target='_blank' rel='noreferrer'>
              <FaTwitter />
            </SocialNetwork>
            <SocialNetwork
              href='https://www.facebook.com/dilshodxon.iskandarov.7'
              target='_blank'
              rel='noreferrer'
            >
              <FaFacebookSquare />
            </SocialNetwork>
          </Item>
        </Contacts>
      </FooterContainer>
      <Bottom language={language} />
    </FooterBlock>
  )
}

export default Footer
