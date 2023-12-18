import * as React from 'react';

import { Box } from '@mui/material';

import '../css/price.css';

function CardInfoBox({ sale, price, afterPrice, notice, date }) {
  return (
    <Box className='card-info-box'>
      <ul className='price-info'>
        {sale && <li className='sale'>{sale}</li>}
		{price && <li className='price'>{price}</li>}
		{afterPrice && <li className='after-price'>{afterPrice}</li>}
		{notice && <li className='notice'>{notice}</li>}
		{date && <li className='date'>{date}</li>}
      </ul>
    </Box>
  );
}

CardInfoBox.defaultProps = {
  sale: '',
  price: '',
  afterPrice: '',
  notice: '',
  date: '',
};

export default CardInfoBox;
