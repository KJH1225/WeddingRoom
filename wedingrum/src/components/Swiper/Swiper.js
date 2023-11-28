import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function App(){
    return(
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src="img/Party/s1.jpg"/></SwiperSlide>
          <SwiperSlide><img src="img/Party/s2.jpg"/></SwiperSlide>
          <SwiperSlide><img src="img/Party/s3.jpg"/></SwiperSlide>
          <SwiperSlide><img src="img/Party/s4.jpg"/></SwiperSlide>
          <SwiperSlide><img src="img/Party/s5.jpg"/></SwiperSlide>
          <SwiperSlide><img src="img/Party/s6.jpg"/></SwiperSlide>
        </Swiper>
    )
}