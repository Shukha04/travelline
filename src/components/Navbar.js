import styled from 'styled-components'
import { Link, scroller } from 'react-scroll'
import { useEffect, useState } from 'react'
import Button from './Button'

const Navbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  transition: all 0.2s ease-out;
  z-index: 99999;

  &.stick {
    padding: 10px 5%;
    background-color: #112739;
    box-shadow: 0 0 15px 0 black;
  }

  @media (max-width: 767px) {
    & {
      flex-direction: column;
      justify-content: center;
      padding: 10px 5%;

      & > button {
        display: none;
      }
    }
  }
`

const Logo = styled.h1`
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #fc9b4c;
  }
`

const Navigation = styled.nav`
  margin-left: auto;

  @media (max-width: 767px) {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const NavItem = styled(Link).attrs(props => ({
  smooth: true,
  duration: 500,
  spy: true,
  isDynamic: true,
  activeClass: 'active',
  to: props.to
}))`
  cursor: pointer;
  margin: 0 5px;
  opacity: 0.5;
  transition: opacity 0.2s ease;

  &:hover,
  &.active {
    opacity: 1;
  }
`

function NavBar({ language }) {
  function text() {
    if (language === 'uz') return ['Yuqoriga', 'Ekskursiyalar', 'Biz haqimizda', 'Bron qilish']
    else if (language === 'ru') return ['Главная', 'Туры', 'О нас', 'Заказать сейчас']
    else return ['Home', 'Tours', 'Why us?', 'Book now']
  }
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) setScroll(true)
      else setScroll(false)
    })
  }, [])

  return (
    <Navbar className={scroll && 'stick'}>
      <Link to='home' smooth duration={500}>
        <Logo>TravelLine</Logo>
      </Link>
      <Navigation>
        <NavItem to='home'>{text()[0]}</NavItem>
        <NavItem to='tours'>{text()[1]}</NavItem>
        <NavItem to='about'>{text()[2]}</NavItem>
      </Navigation>
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
        {text()[3]}
      </Button>
    </Navbar>
  )
}

export default NavBar
