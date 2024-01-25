import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/keyvisual.css'
import styled from "styled-components";


// import required modules
import {Autoplay, Pagination } from 'swiper/modules';
import SlideInner from '../Component/SlideInner'




export default function KeyVisual() {
    
  return (
    <div className="kyevisual-area">
        <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'fraction',
        }}
        modules={[Autoplay, Pagination]}
        className="VisualSwiper"
        loop={true}
      >
        <SwiperSlide>
            <Box color="#cce2f9">
                <SlideInner imgUrl='/images/keyimg_01.png' firstText='요기요 선물하기로' lastText='마음을 전하세요!' linkUrl='#'/>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box color="#f2d0d2">
            <SlideInner imgUrl='/images/keyimg_02.png' firstText='요기요 선물하기로' lastText='메리크리스마스!' linkUrl='#'/>
            </Box>

        </SwiperSlide>
        <SwiperSlide>
            <Box color="#cff9cb">
                <SlideInner/>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box color="#e2e2e2">
                <SlideInner/>
            </Box>
        </SwiperSlide>
      </Swiper>
    </div>
        
  )
}



const Box = styled.div`
  background-color: ${(props) => props.color};
  padding-top : 56px; 
`;

