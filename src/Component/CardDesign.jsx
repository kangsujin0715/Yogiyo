import * as React from 'react';
import { useState, useEffect } from 'react';

import { Box, Typography } from '@mui/material';

import '../css/cardReflect.css';
// 로딩시간이 걸려 틀어지는 오류가 생김 - 미러효과 css를 따로 만들어서 처음에 올려둠

import '../css/cardSparkles.css';
// 빛반사

import '../css/cardDesign.css';
// 카드 디자인

import '../css/cardIntraction.css';
// 버튼 클릭시 한 방향으로 도는 인터렉션


function CardDesign({ imgViewUrl, imglogoUrl, brand, price, name, content }) {  
  const [textCount, setTextCount] = useState(0);
  const onTextHandler = (e) => {
    setTextCount(e.target.value.length);
  };

  const labelBox = <>제 마음이에요.</>;
  const [labelText, setLabelText] = useState(labelBox);
  const clearLabel = () => {
    setLabelText('');
  };

  const [showHide, setShowHide] = useState(true);
  useEffect(() => {
    // 컴포넌트가 마운트된 후 실행될 코드
    // 여기서는 3초 후에 클래스를 숨기는 코드를 작성합니다.
    const timeoutId = setTimeout(() => {
		setShowHide(false);
    }, 2500);

    // 컴포넌트가 언마운트되면 타임아웃을 정리합니다.
    return () => clearTimeout(timeoutId);
  }, []); // 빈 배열은 컴포넌트가 마운트될 때만 실행하도록 합니다.


  // 클릭 횟수 상태 변수와 업데이트 함수 정의
  const [clickCount, setClickCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isSparkles, setIsSparkles] = useState(true);

  // 클릭 이벤트 핸들러
   const flipCard = () => {
	 setIsOpen((prevState) => !prevState);
	 // sparkles 클릭
	 setIsSparkles((prevState) => !prevState);
	 // 클릭 횟수 업데이트
	 setClickCount((prevCount) => prevCount + 1);
   };

  // 클릭 횟수가 1 이상이면 true, 아니면 false
  const plusFlip = clickCount >= 1;


  return (
    <Box className={`gift-card ${showHide ? 'rotate' : 'intraction'}`}>
      <Box className={`card-box ${isOpen ? 'open' : ''} ${plusFlip ? 'flip' : ''} manual-flip`}>
        <Box className='card-view'>
          <Box className={`front ${showHide ? 'sparkles' : ''}  ${isSparkles ? '' : 'sparkles'}`} onClick={flipCard}>
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
              <button className='click' onClick={flipCard}>
                카드 뒤집기
              </button>
              <p className='byte'>{textCount}/150</p>
            </Box>
          </Box>
            {/* 카드 뒤 */}
          
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

