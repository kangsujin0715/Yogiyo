import React from 'react';
import { Box } from '@mui/material';
import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import '../css/apppay.css';

export default function AppPay() {
  const [isClick, setIsClick] = useState(false);
  const handleClcik = () => {
    setIsClick(!isClick);
  };

  return (
    <Box className="padding-box app-pay-box" sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <button className={`line-btn ${!isClick ? '' : 'check'}`} onClick={handleClcik}>
            페이코
          </button>
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <button className="line-btn">카카오페이</button>
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <button className="line-btn">네이버페이</button>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <button className="line-btn">토스페이</button>
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <button className="line-btn">스마일페이</button>
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <button className="line-btn">신용카드</button>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <button className="line-btn">휴대전화</button>
        </Grid>
      </Grid>
    </Box>
  );
}
