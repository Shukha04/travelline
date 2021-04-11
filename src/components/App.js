import { useEffect, useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import About from '../sections/About'
import Home from '../sections/Home'
import Tours from '../sections/Tours'
import allTours from '../utils/tours'
import Footer from './Footer'
import Language from './Language'
import NavBar from './Navbar'
import Tour from './Tour'

function App() {
  const location = useLocation()
  const [lang, setLang] = useState('ru')

  useEffect(() => {
    location.pathname !== '/'
      ? document.body.classList.add('lock')
      : document.body.classList.remove('lock')
  }, [location.pathname])

  const changeLang = l => {
    setLang(l)
  }

  function toursArr() {
    if (lang === 'uz') return allTours.uz
    else if (lang === 'ru') return allTours.ru
    else return allTours.en
  }

  return (
    <div>
      <NavBar language={lang} />

      <Switch>
        <Route path='/:tour' render={() => <Tour toursArray={toursArr()} language={lang} />} />
      </Switch>

      <Home language={lang} />
      <Tours language={lang} tours={toursArr} />
      <About language={lang} />

      <Footer language={lang} />
      <Language language={lang} changeLanguage={changeLang} />
    </div>
  )
}

export default App
