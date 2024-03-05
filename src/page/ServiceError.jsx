import * as React from 'react';

import { Box, Typography } from '@mui/material';

import '../css/giftCenter.css';

export default function ServiceError({ imgErrorUrl }) {
  return (
    <Box className='gift-center-box'>
      <Box className='gift-center'>
		<img src={imgErrorUrl} alt="에러이미지" />
        <Box className='text-box'>
          <Typography className='text' variant='h2' component='h2'>
            알 수 없는 문제가 발생했어요
          </Typography>
          <p>잠시 후 다시 시도해주세요.<br/>문제가 계속되면 고객센터로 문의해주세요.</p>
        </Box>
		<button className='basic-btn line mb-40'>홈으로 가기</button>
      </Box>
      <Box className='btn-box center'>
        <button className='full-btn pink'>이전으로 돌아가기</button>
      </Box>
    </Box>
  );
}

ServiceError.defaultProps = {
	imgErrorUrl: '/images/error02.svg',
}