import styled from 'styled-components'
import SwiperCore, { EffectCoverflow, Mousewheel, Navigation } from 'swiper'
import 'swiper/components/effect-coverflow/effect-coverflow.scss'
import 'swiper/components/navigation/navigation.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import TourSlide from './TourSlide'

SwiperCore.use([EffectCoverflow, Mousewheel, Navigation])

const Slider = styled(Swiper)`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
  position: relative;
`

function ToursSlider({ language, tours }) {
  const params = {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    direction: 'horizontal',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    mousewheel: {
      forceToAxis: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  return (
    <Slider {...params}>
      {tours().map(tour => (
        <SwiperSlide key={tour.id} style={{ maxWidth: '700px' }}>
          <TourSlide tour={tour} language={language} />
        </SwiperSlide>
      ))}
      <div className='swiper-button-prev' style={{ color: '#fc9b4c' }} />
      <div className='swiper-button-next' style={{ color: '#fc9b4c' }} />
    </Slider>
  )
}

export default ToursSlider
