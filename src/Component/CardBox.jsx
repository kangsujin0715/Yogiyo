import * as React from 'react';

import ImgTab from './ImgTab';
import CardDesign from './CardDesign';
import MoneyTab from './MoneyTab';
import CardInfoBox from './CardInfoBox';

function CardBox() {
  return (
    <>
      <ImgTab/>
      <CardDesign/>
      <MoneyTab/>
      <CardInfoBox sale='5%' price='27,000원' afterPrice='30,000원' notice='이 상품권은 요기요앱 내 브랜드 매장에서만 사용할 수 있어요' date='유효기간 : 구매일로부터 1년' />
    </>
  );
}

export default CardBox;
