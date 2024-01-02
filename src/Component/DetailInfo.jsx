import React from 'react'
import { Box, Typography } from '@mui/material';

function DetailInfo({ title, info }) {
  return (
	<Box className='gird-box'>
	  <Typography variant='h3'>{title}</Typography>
	  	<p className='txt-14'>{info}</p>
	</Box>
  )
}

DetailInfo.defaultProps = {
    title: '보낸사람',
    info: '위대한상상'
}
export default DetailInfo