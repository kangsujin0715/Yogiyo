import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import '../css/moneyTab.css';

const MoneyTab3 = ({onChange}) => {
  const [money, setMoney] = useState(10000);
  const [targetNumber, setTargetNumber] = useState(10000);
  const [moneySelect, setMoneySelect] = useState(0);

  const clickEvent = (target, select) => {
    setTargetNumber(target);
    setMoneySelect(select);
  };

  useEffect(() => {
	onChange(money);
	
    let current = money;
    const increment = targetNumber > current ? 1 : -1;

    const intervalId = setInterval(() => {
      setMoney(current);

      if ((increment > 0 && current >= targetNumber) || (increment < 0 && current <= targetNumber)) {
        clearInterval(intervalId);
      } else {
        current += increment * 1000; // Adjust interval as needed
      }
    }, 25);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [money, targetNumber]);

  return (
	<Box>
	  <Box className="horizontal-scroll">
		<ul className="money-voucher">
		  <li className="disable">10,000원</li>
		  <li onClick={() => clickEvent(10000, 0)} className={moneySelect === 0 ? 'selected' : ''}>10,000원</li>
		  <li onClick={() => clickEvent(15000, 1)} className={moneySelect === 1 ? 'selected' : ''}>15,000원</li>
		  <li onClick={() => clickEvent(20000, 2)} className={moneySelect === 2 ? 'selected' : ''}>20,000원</li>
		  <li onClick={() => clickEvent(30000, 3)} className={moneySelect === 3 ? 'selected' : ''}>30,000원</li>
		  <li onClick={() => clickEvent(50000, 4)} className={moneySelect === 4 ? 'selected' : ''}>50,000원</li>
		  <li onClick={() => clickEvent(100000, 5)} className={moneySelect === 5 ? 'selected' : ''}>100,000원</li>
		</ul>
	  </Box>
	</Box>
  );
};

export default MoneyTab3;