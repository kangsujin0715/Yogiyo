import * as React from 'react';

import { Box, Typography } from '@mui/material';

import '../css/giftCenter.css';

export default function GiftError({ imgErrorUrl }) {
  return (
    <Box className='gift-center-box'>
      <Box className='gift-center'>
		<img src={imgErrorUrl} alt="에러이미지" />
        <Box className='text-box'>
          <Typography className='text' variant='h2' component='h2'>
            선물하기를 완료하지 못했어요
          </Typography>
          <p>일시적인 오류로 선물하기 결제에 실패했어요.<br/>문제가 계속되면 고객센터로 문의해주세요.</p>
        </Box>
      </Box>
      <Box className='btn-box center'>
        <button className='full-btn pink'>다시 선물하기</button>
      </Box>
    </Box>
  );
}

GiftError.defaultProps = {
	imgErrorUrl: '/images/error.svg',
}