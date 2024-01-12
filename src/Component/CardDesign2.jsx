import * as React from 'react';
import { useState, useEffect } from 'react';

import { Box, Typography } from '@mui/material';

import '../css/cardDesign.css';
// import '../css/cardSparkles.css';
// import '../css/cardintraction.css';
// 계속 실행
// import '../css/cardRotate.css';
// 로테이트 시작시 실행 후 삭제

function CardDesign2({ imgViewUrl, imglogoUrl, brand, price, name, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const rotateCard = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [showClass, setShowClass] = useState(true);
  useEffect(() => {
    // 컴포넌트가 마운트된 후 실행될 코드
    // 여기서는 3초 후에 클래스를 숨기는 코드를 작성합니다.
    const timeoutId = setTimeout(() => {
      setShowClass(false);
    }, 3000);

    // 컴포넌트가 언마운트되면 타임아웃을 정리합니다.
    return () => clearTimeout(timeoutId);
  }, []); // 빈 배열은 컴포넌트가 마운트될 때만 실행하도록 합니다.


  return (
    <Box className='gift-card'>
      <Box className={`card-box w-280 ${isOpen ? 'open' : ''} ${showClass ? 'rotate' : ''} manual-flip `}>
        <Box className='card-view'>
		  {/* <Cancel pCancel='선물 취소'></Cancel> */}
          <Box className='front card sparkles animated' onClick={rotateCard}>
            <img className='img-view' src={imgViewUrl} alt='카드 디자인 이미지' />
            {/* <button className='message-btn'>메세지 쓰기</button> */}
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
            <Box className='complete-box' onClick={rotateCard}>
              <Box className='complete'>
                <Typography variant='h2' component='h2'>
                  {name}
                </Typography>
                {content}
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
  imgViewUrl: '/images/gift-card/gift-card-test.gif',
  imglogoUrl: '/images/logo/yogiyo.png',
  brand: '요기요 상품권',
  price: (
    <>
      <span className='num'>30,000</span>원
    </>
  ),
  name: (
    <>
      To.<span className='name'>김민지 외 13명</span>
    </>
  ),
  content: (
      <p className='content'>
        최소글자는 1글자, 최대 글자는 150자로 맞춰 놓으면 어떨까요? 충분해 보이는 영역입니다.
      </p>
  ),
};

export default CardDesign2;

