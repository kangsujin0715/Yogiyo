import React from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../css/cardslideinner.css'

import CardRegisterSlide from './CardRegisterSlide';

export default function CardSwiper() {
  return (
	<Swiper
	
	  className="card-register"
	  spaceBetween={8}
	  centeredSlides={true}
	  slidesPerView={1.15}
	  onActiveIndexChange={(swiper) => {
		console.log("active index is", swiper.activeIndex);
	  }}
	>
	  <SwiperSlide>
		<Box className="slide" sx={{ backgroundColor: '#0A1966', color: '#fff' }}><CardRegisterSlide /></Box>
	  </SwiperSlide>
	  <SwiperSlide>
		<button className="slide card-add">카드 등록</button>
	  </SwiperSlide>
	</Swiper>
  );
}
