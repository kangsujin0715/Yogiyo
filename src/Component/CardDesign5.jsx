import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import CountUp from 'react-countup';

import '../css/cardReflect.css'; // 미러효과 : 로딩시간이 걸려 틀어지는 오류가 생김 - css를 따로 만들어서 맨 처음에 올려둠
import '../css/cardSparkles.css'; // 빛 반사
import '../css/cardDesign.css'; // 카드 디자인
import '../css/cardintraction2.css';// 로딩시 한 바퀴 도는 인터렉션

function CardDesign5({ imgViewUrl, imglogoUrl, brand, money, images }) {
    const [rotationAngle, setRotationAngle] = useState(0);// 카드 회전 각도 상태와 터치 시작점 좌표 상태를 정의
    const [touchStartX, setTouchStartX] = useState(0); // 카드 회전 중 여부를 추적하는 상태를 정의
	const [isRotating, setIsRotating] = useState(false);
	const [showButtons, setShowButtons] = useState(true); // 버튼 표시 여부 상태 추가

	const sensitivity = 1.5; // 터치 드래그 감도 설정

	// 터치 시작 이벤트 핸들러를 정의
    const handleTouchStart = (event) => {
        setTouchStartX(event.touches[0].clientX);
    };

	// 터치 이동 이벤트 핸들러를 정의
    const handleTouchMove = (event) => {
        if (touchStartX === 0) return;

        const touchEndX = event.touches[0].clientX;
        const deltaX = touchEndX - touchStartX;

		// 회전 각도를 업데이트
        setRotationAngle(rotationAngle + deltaX * sensitivity);
        setTouchStartX(touchEndX);
    };

	// 터치 종료 이벤트 핸들러를 정의
    const handleTouchEnd = (event) => {
		const finalRotation = Math.round(rotationAngle / 90) * 90; // 최종 회전 각도를 설정
        setRotationAngle(finalRotation);

		// 회전 각도가 180의 배수가 아니면 추가로 90도 회전
        if (finalRotation % 180 !== 0) setRotationAngle(finalRotation + 90);
		
		setTouchStartX(0);

		// 회전 완료 후 회전 중 플래그를 해제
		setTimeout(() => {
		  setIsRotating(false);
		  setShowButtons(true); // 회전 완료 후 버튼 표시
		}, 500);
    };

    const [scale, setScale] = useState(1);
	const [isSparkles, setIsSparkles] = useState(true);

	// 클릭 이벤트 핸들러
	const flipCard = (face) => {
		if (!isRotating) {
		setIsRotating(true);

		// 뒤집을 방향에 따라 회전 각도를 업데이트
		if (face === 'back') {
			setRotationAngle(rotationAngle + 180);
		} else if (face === 'front') {
			setRotationAngle(rotationAngle + 180);
		}
			setShowButtons(false); // 뒤집기 시작 시 버튼 숨기기
		}
		setScale(0.95); // 회전할 때 scale을 0.95로 변경
		setIsSparkles((prevState) => !prevState); // sparkles 클릭
	}

	const handleTransitionEnd = () => {
      	setScale(1); // 회전이 끝난 후 scale을 다시 1로 변경
    };

	const [textCount, setTextCount] = useState(0);
	const onTextHandler = (e) => {
	  setTextCount(e.target.value.length);
	};
  
	const labelBox = <>제 마음이에요.</>;
	const [labelText, setLabelText] = useState(labelBox);
	const clearLabel = () => {
	  setLabelText('');
	}; //textarea
  
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
  
	const [startVal, setStartVal] = useState(10000);
	const divisionUnit = 5000;

    return (
	<Box className={`gift-card ${showHide ? 'rotate' : 'intraction'}`} style={{ transform: `scale(${scale})` }}>
      <Box className={`card-box manual-flip`} style={{ touchAction: 'none' }} onTransitionEnd={handleTransitionEnd} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <Box className='card-view' style={{ transform: `rotateY(${rotationAngle}deg)` }}>
          <Box className={`front ${showHide ? 'sparkles' : ''} ${isSparkles ? '' : 'sparkles'}`} onClick={() => flipCard('back')}>
            <img className='img-view' src={images} />
			<button className={`message-btn flip-button ${showButtons ? '' : 'hide'}`}>메세지 쓰기</button>
            <Box className='card-info' sx={{ backgroundColor: '#2C4299' }}>
              <img className='logo' src={imglogoUrl} alt='로고 이미지' />
              <Box className='title-box'>
                <Typography className='brand' variant='h3' component='h3'>
                  {brand}
                </Typography>
                <Typography className="price">
                  <CountUp
                    start={startVal}
                    end={money}
                    duration={1}
                    onEnd={() => setStartVal(money)}
                    className="num"
                    useGrouping
                    formattingFn={useCallback((target) =>
                      (Number((target / divisionUnit).toFixed(0)) * divisionUnit).toLocaleString()
                    )}
                  />
                  원
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* 카드 앞 */}
		  <Box className='back' sx={{ backgroundColor: '#2C4299' }} onTransitionEnd={handleTransitionEnd} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <Box className='text-box' >
              <label htmlFor='text' className='label-box'>
                {labelText}
              </label>
              <textarea id='text' onChange={onTextHandler} onClick={clearLabel} maxLength='150'/>
             	<button className={`click flip-button ${showButtons ? '' : 'hide'}`} onClick={() => flipCard('front')}>
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