import React from 'react';
import '../include/css/common.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';

function GiftHeader() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#fff' }}>
      <AppBar className='header' position="static" sx={{ backgroundColor: '#fff' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <ArrowBackIosIcon />
			<CloseIcon/>
          </IconButton>
          <Typography component="h2" sx={{ flexGrow: 1, color: '#000', fontWeight: '700' }}>
            선물하기
          </Typography>
          <button className="gift-icon"></button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default GiftHeader;
