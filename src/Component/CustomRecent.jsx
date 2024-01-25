import React, { useState } from 'react';
import { Box, Drawer, FormControl, FormLabel, Typography } from '@mui/material';
import PhoneCheckBox from './PhoneCheckBox';

import '../css/categoryfilter.css';
import '../css/bottomSheet.css';

function CustomRecent({ pTitle }) {
  const [state, setState] = useState({ bottom: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const recent = (anchor) => (
    <Box
      className="filter-box"
      sx={{ width: anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <FormControl className="in-filter">
        <FormLabel id="filter-radio-buttons-group" className="title-label">
          {pTitle}
        </FormLabel>
        <Typography variant="h3" className="choice">
          총 <span className="num">2</span>명 선택
        </Typography>
		<Box className='bottomSheet'>
        	<PhoneCheckBox/>
		</Box>
        <Box className="btn-box">
          <button className="full-btn pink" onClick={toggleDrawer(anchor, false)}>
            추가하기
          </button>
        </Box>
      </FormControl>
    </Box>
  );

  return (
    <>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button className="plus-btn" onClick={toggleDrawer(anchor, true)}>
            최근
          </button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {recent(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}

export default CustomRecent;
