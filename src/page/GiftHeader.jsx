import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function GiftHeader() {
  return (
    <Box className="header" sx={{ backgroundColor: '#fff' }}>
      <button className="black-btn"></button>
	  {/* <button className="close-btn"></button> 취소버튼 */}
      <Typography variant="h1" component="h1" sx={{ flexGrow: 1, paddingLeft: '0.8rem' }}>
        선물하기
      </Typography>
      <button className="gift-btn"></button>
    </Box>
  );
}

export default GiftHeader;
