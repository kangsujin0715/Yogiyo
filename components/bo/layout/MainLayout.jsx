import { Box } from '@mui/material';
import React from 'react';
import '../../../asset/bo/component-css/mainLayout.css';
import '../../../asset/bo/component-css/common.css';
import HaderTest from '../complex/HeaderTest';
import LnbTest from '../complex/LnbTest';


export default function MainLayout(props) {
  return (
    <>
      <HaderTest/>
      <Box className="flex-box">
        <Box component="aside" className="lnb-container">
          <LnbTest/>
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
    </>
  );
}
