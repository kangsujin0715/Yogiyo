import * as React from 'react';

import { Box, Typography } from '@mui/material';

//import '../css/cardReflect.css';
// 로딩시간이 걸려 틀어지는 오류가 생김 - 미러효과 css를 따로 만들어서 처음에 올려둠

//import '../css/cardSparkles.css';
// 빛반사

//import '../css/cardDesign.css';
// 카드 디자인


function CardDesign3({ imgViewUrl, imglogoUrl, brand, price, name, content, txt }) {
  return (
    <Box className={`gift-card`}>
      <Box className={`card-box w-280 manual-flip`}>
        <Box className='card-view'>
		<Box className='cancel-box'>
			<p className='cancel-txt'>{txt}</p>	
		</Box>
          <Box className={`front`}>
            <img className='img-view' src={imgViewUrl} alt='카드 디자인 이미지' />
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
            <Box className='complete-box'>
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

CardDesign3.defaultProps = {
  txt: '',	
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

export default CardDesign3;

