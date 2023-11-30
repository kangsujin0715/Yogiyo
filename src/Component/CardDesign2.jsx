import * as React from 'react';
import { useState } from 'react';

import { Box, Typography } from '@mui/material';

import '../css/cardSparkles.css';
import '../css/cardDesign.css';

function CardDesign2({ imgViewUrl, imglogoUrl, pBrand, pPrice, pName, pContent }) {
  const [isOpen, setIsOpen] = useState(false);
  const rotateCard = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Box className='gift-card'>
      <Box className={`card-box w-280 ${isOpen ? 'open' : ''} manual-flip `}>
        <Box className='card-view'>
          <Box className='front card sparkles animated' onClick={rotateCard}>
            <img className='img-view' src={imgViewUrl} alt='카드 디자인 이미지' />
            {/* <button className='message-btn'>메세지 쓰기</button> */}
            <Box className='card-info' sx={{ backgroundColor: '#2d863c' }}>
              <img className='logo' src={imglogoUrl} alt='로고 이미지' />
              <Box className='title-box'>
                <Typography className='brand' variant='h3' component='h3'>
                  {pBrand}
                </Typography>
                <Typography className='price'>{pPrice}</Typography>
              </Box>
            </Box>
          </Box>
          {/* 카드 앞 */}

          <Box className='back' sx={{ backgroundColor: '#2d863c' }}>
            <Box className='complete-box' onClick={rotateCard}>
              <Box className='complete'>
                <Typography variant='h2' component='h2'>
                  {pName}
                </Typography>
                {pContent}
              </Box>
            </Box>
            {/* 카드 완료 */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

CardDesign2.defaultProps = {
  imgViewUrl: '/images/gift-card/card-img.png',
  imglogoUrl: '/images/logo/yogiyo.png',
  pBrand: '요기요 상품권',
  pPrice: (
    <>
      <span className='num'>30,000</span>원
    </>
  ),
  pName: (
    <>
      To.<span className='name'>김민지 외 13명</span>
    </>
  ),
  pContent: (
      <p className='content'>
        최소글자는 1글자, 최대 글자는 150자로 맞춰 놓으면 어떨까요? 충분해 보이는 영역입니다.
      </p>
  ),
};

export default CardDesign2;

