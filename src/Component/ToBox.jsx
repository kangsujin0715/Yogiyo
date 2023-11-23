import * as React from 'react';
import { useState } from 'react';

import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import ToInput from './ToInput';

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
        {plusClick}
        <Grid container spacing={1}>
          <Grid xs display='flex' justifyContent='center' alignItems='center'>
            <button className='plus-btn'>최근</button>
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
