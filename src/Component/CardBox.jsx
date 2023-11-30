import * as React from 'react';

import ImgTab from './ImgTab';
import CardDesign from './CardDesign';
import MoneyTab from './MoneyTab';
import CardInfoBox from './CardInfoBox';

function CardBox() {
  return (
    <>
      <ImgTab></ImgTab>
      <CardDesign></CardDesign>
      <MoneyTab></MoneyTab>
      <CardInfoBox pSale='5%' pPrice='27,000원' pAfterPrice='30,000원' pDate='유효기간 : 구매일로부터 1년' />
    </>
  );
}

export default CardBox;
