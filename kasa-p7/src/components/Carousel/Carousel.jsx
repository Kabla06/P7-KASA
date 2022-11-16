import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Carousel.css'

export default function Carousel({ pictures }) {
   let value = Math.floor(Math.random() * 999)

   return (
      <>
         <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className='mySwiper'
         >
            {pictures.map((p) => (
               <SwiperSlide key={(value += 1)}>
                  <img src={p} alt='' />
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   )
}
