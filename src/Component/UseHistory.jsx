import React from 'react'
import { Box, Typography } from '@mui/material';

function UseHistory({ pNum, pDate }) {
  return (
	<Box className='gird-box'>
	  <Typography variant='h4'>{pNum}</Typography>
	  <p className='txt-12'>{pDate}</p>
	</Box>
  )
}

UseHistory.defaultProps = {
    pNum: '주문번호 0000000000',
    pDate: '2023.04.23 19:53'
}
export default UseHistory