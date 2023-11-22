import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ImgTab from './ImgTab';
import GiftCard from './GiftCard';
import MoneyTab from './MoneyTab';

function CardView() {

  return (
    <>
      <ImgTab></ImgTab>
      <GiftCard></GiftCard>
      <MoneyTab></MoneyTab>

      <Box className="card-info-box">
        <ul className="price-info">
          <li className="sale">5%</li>
          <li className="price">24,000원</li>
          <li className="after-price">30,000원</li>
        </ul>
        <Typography className="date">유효기간 : 구매일로부터 1년</Typography>
      </Box>
    </>
  );
}

export default CardView;
