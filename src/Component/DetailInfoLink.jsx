import React from 'react'
import { Box, Typography, Link } from '@mui/material';

function DetailInfoLink({ title, infoLink }) {
  return (
	<Box className='gird-box'>
	  <Typography variant='h3'>{title}</Typography>
	  <Link href='#' className='info-link disabled-link'>{infoLink}</Link>
	</Box>
  )
}

DetailInfoLink.defaultProps = {
    title: '보낸사람',
    infoLink: '김민지 외 100명'
}
export default DetailInfoLink