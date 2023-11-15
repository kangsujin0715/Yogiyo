import React from 'react';
import '../include/css/common.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

function GiftHeader() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" aria-label="menu">
		  	<button className="black-btn"></button>
			{/* <button className="close-btn"></button> 취소버튼 */}
          </IconButton>
          <Typography variant="h1" component="h1" sx={{ flexGrow: 1, paddingLeft: '0.8rem' }}>
            선물하기
          </Typography>
		  <button className="gift-btn"></button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default GiftHeader;
