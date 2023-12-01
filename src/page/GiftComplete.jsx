import * as React from 'react';

import { Box, Typography } from '@mui/material';

import CardDesign2 from '../Component/CardDesign2';

export default function GiftComplete() {
  return (
    <Box className='gift-complete-box'>
      <Box className='gift-complete-card'>
        <CardDesign2></CardDesign2>
        <Box className='text-box'>
          <Typography className='text' variant='h2' component='h2'>
            선물하기 완료!
          </Typography>
          <p>보낸 선물함에서 상세하게 확인할 수 있어요.</p>
        </Box>
      </Box>
      <Box className='btn-box col'>
        <button className='full-btn pink'>선물 확인하기</button>
        <button className='full-btn whit mt-12'>다른 선물하기</button>
      </Box>
    </Box>
  );
}
