import { Box } from '@mui/material';
import React from 'react';

import '../../../asset/bo/component-css/mainLayout.css';
import '../../../asset/bo/component-css/common.css';
import HaderTest from '../complex/HeaderTest';
import LnbTest from '../complex/LnbTest';
import NavTest from '../complex/NavTest';


export default function MainLayout(props) {
  return (
    <>
      <HaderTest/>
      <Box className='flex-box'>
        <Box component='aside' className='lnb-container'>
          <LnbTest/>
        </Box>
        <Box className='main-container'>
          <Box component='nav' className='nav-container'>
		  	<NavTest/>
          </Box>
          <Box component='main' className='main'>
            {props.children}
          </Box>
        </Box>
      </Box>
    </>
  );
}
