import * as React from 'react';

import { Box, Typography } from '@mui/material';

import CardDesign2 from '../Component/CardDesign2';

import '../css/complete.css';

export default function RefundComplete() {
  return (
    <Box className='hw-box'>
      <Box className='complete-box'>
        <CardDesign2></CardDesign2>
        <Box className='text-box'>
          <Typography className='text' variant='h2' component='h2'>
            환불신청 완료!
          </Typography>
          <p>영업일 기준 7일 이내에<br/>입력하신 계좌로 환불될 거예요.</p>
        </Box>
      </Box>
      <Box className='btn-box col'>
        <button className='full-btn pink'>환불 신청내역 보기</button>
        <button className='full-btn whit mt-12'>선물함으로 돌아가기</button>
      </Box>
    </Box>
  );
}
