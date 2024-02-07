import * as React from 'react';
import { useState } from 'react';
import MoneyTab3 from './MoneyTab3';
import CardDesign from './CardDesign';

function CardMoneyBox() {
	const [money, setMoney] = useState(10000);
	const handleMoneyChange = (money) => {
		console.log("TEST",money)
		setMoney(money);
	};
	
  return (
    <>
	  <CardDesign money={money}/>
	  <MoneyTab3 onChange={handleMoneyChange}/>
	</>
  );
}

export default CardMoneyBox;