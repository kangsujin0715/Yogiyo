import * as React from 'react';
import { useState } from 'react';
import MoneyTab from './MoneyTab';
import CardDesign from './CardDesign';

function CardMoneyBox() {
  const [moneySelected, setMoneySelected] = useState(0);

  const moneyTabClick = (moneyNumber) => {
    setMoneySelected(moneyNumber);
  };

  const moneyTabList = [
    { price: '10,000' },
    { price: '15,000' },
    { price: '20,000' },
    { price: '30,000' },
    { price: '50,000' },
    { price: '100,000' },
  ];

  return (
    <>
	  <CardDesign moneySelected={moneySelected} moneyTabList={moneyTabList}/>
      <MoneyTab onMoneyClick={moneyTabClick} moneyTabList={moneyTabList} />
	</>
  );
}

export default CardMoneyBox;