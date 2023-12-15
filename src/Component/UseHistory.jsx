import React from 'react'
import { Box, Typography } from '@mui/material';

function UseHistory({ num, date }) {
  return (
	<Box className='gird-box'>
	  <Typography variant='h4'>{num}</Typography>
	  <p className='txt-12'>{date}</p>
	</Box>
  )
}

UseHistory.defaultProps = {
    num: '주문번호 0000000000',
    date: '2023.04.23 19:53'
}
export default UseHistory