import React from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../css/cardslideinner.css'

export default function CardSwiper() {
	const cardList = [
		{ cbg: {backgroundColor : '#0A1966'}, imgUrl: '/images/card-brand.svg', cNum: '****1234', cId: 'card01', cFor: 'card01', cChecked: true },
		{ cbg: {backgroundColor : '#807363'}, imgUrl: '/images/KB.svg', cNum: '****9999', cId: 'card02', cFor: 'card02' },
	]

  return (
	<Swiper className="card-register" spaceBetween={8} centeredSlides={true} slidesPerView={1.15} onActiveIndexChange={(swiper) => {
		console.log("active index is", swiper.activeIndex);
	  }}>
		{cardList.map((list, i) => {
			return (
				<SwiperSlide key={i}>
					<Box className="slide">
						<div className='card-register-inner'>
							<input type="radio" id={list.cId} name='register' defaultChecked={list.cChecked} />
							<label htmlFor={list.cFor} className='flex' style={list.cbg}>
								<img className='brand-logo' src={list.imgUrl} alt={list.cAlt} />
								{/* {brand} */}
								<span className='card-num'>{list.cNum}</span>
							</label>
						</div>
					</Box>
				</SwiperSlide>
			);
		})}
	  <SwiperSlide>
		<button className="slide card-add">카드 등록</button>
	  </SwiperSlide>
	</Swiper>
  );
}
