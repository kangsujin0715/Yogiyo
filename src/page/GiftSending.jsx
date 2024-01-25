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
          <p>받는 사람이 많아 시간이 오래 걸려요.<br/>
		  	선물하기 실패 시 전체 결제가 취소됩니다.
		  </p>
        </Box>
      </Box>
      <Box className="btn-box col">
        <button className="full-btn pink">선물 확인하기</button>
        <button className="full-btn whit mt-12">다른 선물하기</button>
      </Box>
    </Box>
  );
}
