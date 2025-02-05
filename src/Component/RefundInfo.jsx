import * as React from 'react';

import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import BankSelect from './BankSelect';
import RefundSelect from './RefundSelect';

import '../css/customSelect.css';

function RefundInfo() {
  return (
    <Box className='padding-box'>
      <Typography variant='h2' className='title'>
        환불 정보
      </Typography>
      <Box className='to' sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} sx={{ mb: '2px' }}>
          <Grid xs={4} display='flex' justifyContent='start' alignItems='center'>
			<Typography variant='h3'>
				예금주명
			</Typography>
          </Grid>
          <Grid xs={8} display='flex' justifyContent='center' alignItems='center'>
            <input type='text' placeholder='이름' />
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ mb: '2px' }}>
          <Grid xs={4} display='flex' justifyContent='start' alignItems='center'>
			<BankSelect/>
          </Grid>
          <Grid xs={8} display='flex' justifyContent='center' alignItems='center'>
            <input type='text' placeholder='계좌번호 입력' />
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ mb: '2px' }}>
          <Grid xs={4} display='flex' justifyContent='start' alignItems='center'>
			<Typography variant='h3'>
				환불사유
			</Typography>
          </Grid>
          <Grid xs={8} className='w-auto' display='flex' justifyContent='center' alignItems='center'>
		  <RefundSelect/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default RefundInfo;
