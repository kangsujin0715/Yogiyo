import * as React from 'react';

import { Box, Typography } from '@mui/material';

function CardInfoBox({ pSale, pPrice, pAfterPrice, pDate }) {
  return (
    <Box className='card-info-box'>
      <ul className='price-info'>
        <li className='sale'>{pSale}</li>
        <li className='price'>{pPrice}</li>
        <li className='after-price'>{pAfterPrice}</li>
      </ul>
      <Typography className='date'>{pDate}</Typography>
    </Box>
  );
}

CardInfoBox.defaultProps = {
  pSale: '',
  pPrice: '',
  pAfterPrice: '',
  pDate: '',
};
export default CardInfoBox;
