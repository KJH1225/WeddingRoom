import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="./img/Party/v1.jpg"/></SwiperSlide>
        <SwiperSlide><img src="./img/Party/v2.jpg"/></SwiperSlide>
        <SwiperSlide><img src="./img/Party/v3.jpg"/></SwiperSlide>
        <SwiperSlide><img src="./img/Party/v4.jpg"/></SwiperSlide>        
      </Swiper>
    </>
  );
}
