import React from 'react'
import { Box, Typography } from '@mui/material';

import '../css/common.css';

function DetailInfo({ pTitle, pInfo }) {
  return (
	<Box className='gird-box'>
	  <Typography variant='h3'>{pTitle}</Typography>
	  <p className='txt-14'>{pInfo}</p>
	</Box>
  )
}

DetailInfo.defaultProps = {
    pTitle: '보낸사람',
    pInfo: '위대한상상'
}
export default DetailInfo