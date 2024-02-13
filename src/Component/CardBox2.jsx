import * as React from 'react';

import ImgTab from './ImgTab';
// 이미지 Tab
import CardMoneyBox2 from './cardMoneyBox2';
// 카드디자인 + 금액권 Tab
import CardInfoBox from './CardInfoBox';

function CardBox2() {
  return (
    <>
      <ImgTab/>
	  <CardMoneyBox2/>
      <CardInfoBox sale='5%' price='27,000원' afterPrice='30,000원' notice='이 상품권은 요기요앱 내 브랜드 매장에서만 사용할 수 있어요' date='유효기간 : 구매일로부터 1년' />
    </>
  );
}

export default CardBox2;
