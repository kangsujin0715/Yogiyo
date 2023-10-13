import { Box } from '@mui/material';
import React from 'react';
import '../../../asset/bo/component-css/mainLayout.css';
import '../../../asset/bo/component-css/common.css';

export default function MainLayout(props) {
  return (
    <Box>
      <Box component="header" className="header-container">
        Header Area
      </Box>
      <Box className="flex-box">
        <Box component="aside" className="lnb-container">
          LNB
        </Box>
        <Box className="main-container">
          <Box component="nav" className="nav-container">
            Nav
          </Box>
          <Box component="main" className="main">
            {props.children}
          </Box>
        </Box>
      </Box>
      <Box className="footer-container">Footer</Box>
    </Box>
  );
}
