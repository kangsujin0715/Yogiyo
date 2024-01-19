import React, { useState } from 'react';
import { Box, Drawer, FormControl, FormLabel, Typography } from '@mui/material';

import '../css/categoryfilter.css';
import '../css/bottomSheet.css';

import CardPayment from './CardPayment';

function CustomPayment({ pTitle }) {
  const [state, setState] = useState({ bottom: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const payment = (anchor) => (
    <Box
      className="filter-box"
      sx={{ width: anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <FormControl className="in-filter">
        <FormLabel id="filter-radio-buttons-group" className="title-label">
          {pTitle}
		  <button className='bottomSheet-btn'></button>
        </FormLabel>
       
		<Box className='bottomSheet'>
        	<CardPayment/>
		</Box>
        <Box className="btn-box">
          <button className="full-btn pink" onClick={toggleDrawer(anchor, false)}>
            확인
          </button>
        </Box>
      </FormControl>
    </Box>
  );

  return (
    <>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
		  <Box className='gird-box' onClick={toggleDrawer(anchor, true)}>
			<Typography variant='h2' className='title'>
				결제 수단
			</Typography>
			{/* <button className='pay-btn red'>결제수단을 선택해주세요</button> */}
		 	<button className='pay-btn'>요기서 1초결제</button>
		  </Box>
		
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {payment(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}

export default CustomPayment;
