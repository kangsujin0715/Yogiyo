import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export default function AppPay() {
  return (
    <Box className="padding-box app-pay-box" sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs display="flex" justifyContent="center" alignItems="center" defaultChecked={true}>
			<input type="radio" id='app01' name='app'/>
			<label htmlFor='app01' className='line-btn'>
				페이코
			</label>
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
			<input type="radio" id='app02' name='app'/>
			<label htmlFor='app02' className='line-btn'>
				카카오페이
			</label>
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
			<input type="radio" id='app03' name='app'/>
			<label htmlFor='app03' className='line-btn'>
				네이버페이
			</label>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
			<input type="radio" id='app04' name='app'/>
			<label htmlFor='app04' className='line-btn'>
			토스페이
			</label>
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
			<input type="radio" id='app05' name='app'/>
			<label htmlFor='app05' className='line-btn'>
			스마일페이
			</label>
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
			<input type="radio" id='app06' name='app'/>
			<label htmlFor='app06' className='line-btn'>
			신용카드
			</label>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
			<input type="radio" id='app07' name='app'/>
			<label htmlFor='app07' className='line-btn'>
			휴대전화
			</label>
        </Grid>
      </Grid>
    </Box>
  );
}
