import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/keyvisual.css'
import styled from "styled-components";


// import required modules
import { Pagination } from 'swiper/modules';
import SlideInner from '../Component/SlideInner'

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  padding-top : 5.6rem; 
`;


export default function KeyVisual() {
    
  return (
    <div className="kyevisual-area">
        <Swiper
        pagination={{
          type: 'fraction',
        }}
        modules={[Pagination]}
        className="VisualSwiper"
        loop={true}
      >
        <SwiperSlide>
            <Box bgColor="#cce2f9">
                <SlideInner imgUrl='/images/keyimg_01.png' firstText='요기요 선물하기로' lastText='마음을 전하세요!' linkUrl='#'/>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box bgColor="#f2d0d2">
            <SlideInner imgUrl='/images/keyimg_02.png' firstText='요기요 선물하기로' lastText='메리크리스마스!' linkUrl='#'/>
            </Box>

        </SwiperSlide>
        <SwiperSlide>
            <Box bgColor="#cff9cb">
                <SlideInner/>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box bgColor="#e2e2e2">
                <SlideInner/>
            </Box>
        </SwiperSlide>
      </Swiper>
    </div>
        
  )
}





