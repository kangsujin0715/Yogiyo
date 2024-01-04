import React from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/keyvisual.css'
import styled from "styled-components";


// import required modules
import { Pagination } from 'swiper/modules';
import SlideInner from './SlideInner'


export default function CCard() {
  return (
    <div className="kyevisual-area">
        <Swiper pagination={{ type: 'fraction' }} modules={[Pagination]} className="VisualSwiper" loop={true}>
			<SwiperSlide>
				<Box>
					<SlideInner imgUrl='/images/keyimg_01.png'/>
				</Box>
			</SwiperSlide>
			<SwiperSlide>
				<Box>
					<SlideInner imgUrl='/images/keyimg_02.png'/>
				</Box>
			</SwiperSlide>
			<SwiperSlide>
				<Box>
					<SlideInner/>
				</Box>
			</SwiperSlide>
			<SwiperSlide>
				<Box>
					<SlideInner/>
				</Box>
			</SwiperSlide>
      </Swiper>
    </div>
        
  )
}





