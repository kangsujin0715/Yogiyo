import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import '../css/moneyTab.css';

const MoneyTab2 = ({onChange}) => {
	const [money, setMoney] = useState(10000);
	useEffect(()=>{ onChange(money) })

	const clickEvent = (money) => {
		setMoney(money)
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

export default MoneyTab2;