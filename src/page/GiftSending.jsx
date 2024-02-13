import * as React from 'react';

import { Box, Typography } from '@mui/material';

import CardDesign2 from '../Component/CardDesign2';

import '../css/giftCenter.css';

export default function GiftSending() {
  return (
    <Box className="gift-center-box">
      <Box className="gift-center">
        <CardDesign2></CardDesign2>
        <Box className="text-box">
          <Typography className="text mt-0" variant="h2" component="h2">
            선물 보내는 중!
          </Typography>
          <p>받는 사람이 많아 보내는데 시간이 조금 더 걸려요.<br/> 
			선물 완료는 선물함에서 확인해주세요.
		  </p>
        </Box>
      </Box>
      <Box className='btn-box center'>
        <button className="full-btn pink">선물 확인하기</button>
      </Box>
    </Box>
  );
}
