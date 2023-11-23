import * as React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

function ToInput() {
  const [closeClick, setCloseClick] = useState(true);
  const closeBtn = () => {
    setCloseClick(!closeClick);
  };

  return (
    <Box>
      {closeClick && (
        <Grid container spacing={1} sx={{ mb: '2px' }}>
          <Grid xs={4} display='flex' justifyContent='center' alignItems='center'>
            <input type='text' placeholder='이름' />
          </Grid>
          <Grid xs={7} display='flex' justifyContent='center' alignItems='center'>
            <input type='text' placeholder='번호' />
          </Grid>
          <Grid xs={1} display='flex' justifyContent='center' alignItems='center'>
            <button className='close-btn' onClick={() => { closeBtn(); }}></button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default ToInput;
