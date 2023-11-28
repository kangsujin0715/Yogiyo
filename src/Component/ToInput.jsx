import * as React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

function ToInput() {
  const [isClosed, setIsClosed] = useState(true);
  const closedBtn = () => {
    setIsClosed(!isClosed);
  };

  return (
    <Box>
      {isClosed && (
        <Grid container spacing={1} sx={{ mb: '2px' }}>
          <Grid xs={4} display='flex' justifyContent='center' alignItems='center'>
            <input type='text' placeholder='이름' />
          </Grid>
          <Grid xs={7} display='flex' justifyContent='center' alignItems='center'>
            <input type='text' placeholder='번호' />
          </Grid>
          <Grid xs={1} display='flex' justifyContent='center' alignItems='center'>
            <button className='close-btn' onClick={() => { closedBtn(); }}></button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default ToInput;
