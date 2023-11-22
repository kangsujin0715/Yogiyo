import * as React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

function From() {
  return (
      <Box className='from' sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} sx={{mb: '2px'}}>
          <Grid xs={4} display='flex' justifyContent='center' alignItems='center'>
		  	<input type='text' placeholder='이름'/>
          </Grid>
          <Grid xs={7} display='flex' justifyContent='center' alignItems='center'>
            <input type='text' placeholder='번호' />
          </Grid>
          <Grid xs={1} display='flex' justifyContent='center' alignItems='center'>
            <button className='close-btn'></button>
          </Grid>
        </Grid>

        <Grid container spacing={1} sx={{mb: '2px'}}>
          <Grid xs={4} display='flex' justifyContent='center' alignItems='center'>
		  	<input type='text' placeholder='이름'/>
          </Grid>
          <Grid xs={7} display='flex' justifyContent='center' alignItems='center'>
            <input type='text' placeholder='번호' />
          </Grid>
          <Grid xs={1} display='flex' justifyContent='center' alignItems='center'>
            <button className='close-btn'></button>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid xs display='flex' justifyContent='center' alignItems='center'>
            <button className='plus-btn'>최근</button>
          </Grid>
          <Grid xs display='flex' justifyContent='center' alignItems='center'>
            <button className='plus-btn'>역락처</button>
          </Grid>
          <Grid xs display='flex' justifyContent='center' alignItems='center'>
            <button className='plus-btn'>직접</button>
          </Grid>
        </Grid>
      </Box>
  );
}

export default From;
