import * as React from 'react';

import { Box, Typography } from '@mui/material';

function CardInfoBox({ pSale, pPrice, pAfterPrice, pDate }) {
  return (
    <Box className='card-info-box'>
      <ul className='price-info'>
        <li className='sale'>{pSale ? pSale : <span className='none'></span>}</li>
        <li className='price'>{pPrice ? pPrice : <span className='none'></span>}</li>
        <li className='after-price'>{pAfterPrice ? pAfterPrice : <span className='none'></span>}</li>
        <li className='date'>{pDate ? pDate : <span className='none'></span>}</li>
      </ul>
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
