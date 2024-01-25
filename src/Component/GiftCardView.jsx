import React, { useState } from 'react';
import { Box, Drawer, FormControl, FormLabel } from '@mui/material';

import GiftCardViewImg from './GiftCardViewImg';
import CardCate from './CardCate';

import '../css/categoryfilter.css';

function GiftCardView({ pTitle }) {
  const [state, setState] = useState({ bottom: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const giftcard = (anchor) => (
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
        <Box className="bottomSheet">
			<CardCate/>
			<GiftCardViewImg onClick={toggleDrawer(anchor, false)}></GiftCardViewImg>
        </Box>
      </FormControl>
    </Box> 
  );

  return (
    <>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button className="view-btn" onClick={toggleDrawer(anchor, true)}></button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {giftcard(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}

export default GiftCardView;