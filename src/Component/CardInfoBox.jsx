import * as React from 'react';

import { Box } from '@mui/material';

import '../css/price.css';

function CardInfoBox({ pSale, pPrice, pAfterPrice, pNotice, pDate }) {
  return (
    <Box className='card-info-box'>
      <ul className='price-info'>
        {pSale && <li className='sale'>{pSale}</li>}
		{pPrice && <li className='price'>{pPrice}</li>}
		{pAfterPrice && <li className='after-price'>{pAfterPrice}</li>}
		{pNotice && <li className='notice'>{pNotice}</li>}
		{pDate && <li className='date'>{pDate}</li>}
      </ul>
    </Box>
  );
}

CardInfoBox.defaultProps = {
  pSale: '',
  pPrice: '',
  pAfterPrice: '',
  pNotice: '',
  pDate: '',
};

export default CardInfoBox;
