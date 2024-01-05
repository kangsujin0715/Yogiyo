import * as React from 'react';
import { useState } from 'react';

import { Box, Typography } from '@mui/material';

import '../css/cardSparkles.css';
import '../css/cardDesign.css';

function CardDesign({ imgViewUrl, imglogoUrl, brand, price, name, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const rotateCard = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [textCount, setTextCount] = useState(0);
  const onTextHandler = (e) => {
    setTextCount(e.target.value.length);
  };

  const labelBox = (
    <>
      제 마음이에요.
    </>
  );
  const [labelText, setLabelText] = useState(labelBox);
  const clearLabel = () => {
    setLabelText('');
  };


  return (
    <Box className='gift-card'>
      <Box className={`card-box ${isOpen ? 'open' : ''} manual-flip `}>
        <Box className='card-view'>
          <Box className='front card sparkles animated' onClick={rotateCard} >
            <img className='img-view' src={imgViewUrl} alt='카드 디자인 이미지' />
            <button className='message-btn'>메세지 쓰기</button>
            <Box className='card-info' sx={{ backgroundColor: '#2C4299' }}>
              <img className='logo' src={imglogoUrl} alt='로고 이미지' />
              <Box className='title-box'>
                <Typography className='brand' variant='h3' component='h3'>
                  {brand}
                </Typography>
                <Typography className='price'>{price}</Typography>
              </Box>
            </Box>
          </Box>
          {/* 카드 앞 */}

          <Box className='back' sx={{ backgroundColor: '#2C4299' }}>
            <Box className='text-box' >
              <label htmlFor='text' className='label-box'>
                {labelText}
              </label>
              <textarea
                id='text'
                onChange={onTextHandler}
                onClick={clearLabel}
                maxLength='150'
              ></textarea>
              <button className='click' onClick={rotateCard}>
                카드 뒤집기
              </button>
              <p className='byte'>{textCount}/150</p>
            </Box>
            {/* 카드 뒤 */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

CardDesign.defaultProps = {
  imgViewUrl: '/images/gift-card/gift-card-test.gif',
  imglogoUrl: '/images/logo/yogiyo.png',
  brand: '요기요 상품권',
  price: (
    <>
      <span className='num'>50,000</span>원
    </>
  ),
  name: (
    <>
      To.<span className='name'>김민지</span>
    </>
  ),
  content: (
      <p className='content'>
        최소글자는 1글자, 최대 글자는 150자로 맞춰 놓으면 어떨까요? 충분해 보이는 영역입니다.
      </p>
  ),
};

export default CardDesign;

