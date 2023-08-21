import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function Banner() {
  return (
    <div className='mx-auto w-full max-w-screen-xl lg:pb-8'>
    <Swiper navigation={true} modules={[Navigation]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src='/assets/sliderImg1.jpg' alt='Learning 1' />
      </SwiperSlide>
      <SwiperSlide><img src='/assets/sliderImg2.jpg' alt='Learning 1' /></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Banner