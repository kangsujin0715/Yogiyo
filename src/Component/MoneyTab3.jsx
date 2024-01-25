import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import '../css/moneyTab.css';

const MoneyTab3 = ({onChange}) => {
	const [money, setMoney] = useState(10000);

	//const [intervalState, setIntervalState] = useState(null);

	//const  changeText = (targetMony) => {
		// if (money < targetMony) {
		//   if (money % 10000 !== 0) {
		// 	setMoney(Math.ceil(money / 10000) * 10000)
		//   } else {
		// 	setMoney(money + (targetMony - money === 5000 ? 5000 : 10000) )
		//   }
		// } else if (money > targetMony) {
		//   if (money % 10000 !== 0) {
		// 	setMoney(Math.floor(money / 10000) * 10000)
		//   } else {
		// 	setMoney(money - (money - targetMony === 5000 ? 5000 : 10000))
		//   }
		// }
		// clearInterval(intervalState);
	  //};

	useEffect(()=>{ onChange(money) })

	const clickEvent = (money) => {
		setMoney(money)
		// setIntervalState(setInterval(() => {
		// 	changeText(money);
		//   }, 250))
	  };

	  return (
		<Box>
		  <Box className="horizontal-scroll">
			<ul className="money-voucher">
			  <li className="disable">10,000원</li>
			  <li onClick={() => clickEvent(10000)} className={money === 10000 ? 'selected' : ''}>10,000원</li>
			  <li onClick={() => clickEvent(15000)} className={money === 15000 ? 'selected' : ''}>15,000원</li>
			  <li onClick={() => clickEvent(20000)} className={money === 20000 ? 'selected' : ''}>20,000원</li>
			  <li onClick={() => clickEvent(30000)} className={money === 30000 ? 'selected' : ''}>30,000원</li>
			  <li onClick={() => clickEvent(50000)} className={money === 50000 ? 'selected' : ''}>50,000원</li>
			  <li onClick={() => clickEvent(100000)} className={money === 100000 ? 'selected' : ''}>100,000원</li>
			</ul>
		  </Box>
		</Box>
	  );
}

export default MoneyTab3;