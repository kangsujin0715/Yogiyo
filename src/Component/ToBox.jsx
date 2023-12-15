import * as React from 'react';
import { useState } from 'react';

import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import ToInput from './ToInput';
import Recent from './Recent';

import '../css/to.css';

function ToBox() {
  const [plusClick, setPlusClick] = useState([]);
  const plusBtn = () => {
    setPlusClick(plusClick.concat(<ToInput />));
  };

  return (
    <Box className='padding-box'>
      <Typography variant='h2' className='inline title star'>
        받는 사람
      </Typography>
      <span>&#40;최대 100명&#41;</span>
      <Box className='to' sx={{ flexGrow: 1 }}>
        <Grid className='error' container spacing={1} sx={{ mb: '2px' }}>
          <Grid xs={4} display='flex' justifyContent='center' alignItems='center'>
            <input type='text' placeholder='이름' />
          </Grid>
          <Grid xs={7} display='flex' justifyContent='center' alignItems='center'>
            <input type='text' placeholder='번호' />
          </Grid>
          <Grid xs={1} display='flex' justifyContent='center' alignItems='center'>
            <button className='close-btn'></button>
          </Grid>
		  <p className='text'>이름 또는 번호를 정확히 입력해주세요</p>
        </Grid>
        {plusClick}
        <Grid container spacing={1}>
          <Grid xs display='flex' justifyContent='center' alignItems='center'>
			<Recent/>
          </Grid>
          <Grid xs display='flex' justifyContent='center' alignItems='center'>
            <button className='plus-btn'>역락처</button>
          </Grid>
          <Grid xs display='flex' justifyContent='center' alignItems='center'>
            <button className='plus-btn' onClick={() => { plusBtn(); }}>직접</button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ToBox;
