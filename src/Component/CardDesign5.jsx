import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

import '../css/cardReflect.css';
// 로딩시간이 걸려 틀어지는 오류가 생김 - 미러효과 css를 따로 만들어서 처음에 올려둠

import '../css/cardSparkles.css';
// 빛반사

import '../css/cardDesign.css';
// 카드 디자인

import '../css/cardintraction2.css';
// 버튼 클릭시 한 방향으로 도는 인터렉션

// 드래그 감도 설정
const sensitivity = 1.5;

function CardDesign5({ imgViewUrl, imglogoUrl, brand, price }) {
    const [rotationAngle, setRotationAngle] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchStartY, setTouchStartY] = useState(0);

    const handleTouchStart = (event) => {
        setTouchStartX(event.touches[0].clientX);
        setTouchStartY(event.touches[0].clientY);
    };

    const handleTouchMove = (event) => {
        if (touchStartX === 0 && touchStartY === 0) return;

        const touchEndX = event.touches[0].clientX;
        const deltaX = touchEndX - touchStartX;

        setRotationAngle((prevRotation) => prevRotation + deltaX * sensitivity);
        setTouchStartX(touchEndX);
    };

    const handleTouchEnd = () => {
        const finalRotation = Math.round(rotationAngle / 90) * 90;
        setRotationAngle(finalRotation);

        if (finalRotation % 180 !== 0) setRotationAngle((prevRotation) => prevRotation + 90);

        setTouchStartX(0);
        setTouchStartY(0);
    };
	// handleTouch 인터렉션

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
  
	const [isSparkles, setIsSparkles] = useState(true);
    const [scale, setScale] = useState(1);

	// 클릭 이벤트 핸들러
	const flipCard = () => {
		setRotationAngle((prevRotation) => prevRotation + 180); // 클릭 시에 앞면과 뒷면을 회전하여 보이도록 설정
        setScale(0.95); // 회전할 때 scale을 0.95로 변경
		setIsSparkles((prevState) => !prevState); // sparkles 클릭
	};

	const handleTransitionEnd = () => {
        setScale(1); // 회전이 끝난 후 scale을 다시 1로 변경
    };

    return (
	<Box className={`gift-card ${showHide ? 'rotate' : 'intraction'}`} style={{ transform: `scale(${scale})` }}>
      <Box className={`card-box manual-flip`} style={{ touchAction: 'none' }} onTransitionEnd={handleTransitionEnd} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <Box className='card-view' style={{ transform: `rotateY(${rotationAngle}deg)` }}>
          <Box className={`front ${showHide ? 'sparkles' : ''} ${isSparkles ? '' : 'sparkles'}`} onClick={flipCard}>
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
		  <Box className='back' sx={{ backgroundColor: '#2C4299' }}  onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <Box className='text-box' >
              <label htmlFor='text' className='label-box'>
                {labelText}
              </label>
              <textarea id='text' onChange={onTextHandler} onClick={clearLabel} maxLength='150'/>
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

CardDesign5.defaultProps = {
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
  
  export default CardDesign5;