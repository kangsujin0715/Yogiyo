import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import '../css/moneyTab.css';

const MoneyTab3 = ({ onChange }) => {
  const [moneyState, setMoneyState] = useState(10000);

  useEffect(() => {
    onChange(moneyState);
  }, [moneyState]);

  const moneyList = [10000, 15000, 20000, 30000, 50000, 100000];
  
  return (
    <Box>
      <Box className="horizontal-scroll">
        <ul className="money-voucher">
          <li className="disable">10,000원</li>
          {moneyList.map((money) => (
            <li key={money} onClick={() => setMoneyState(money)} className={moneyState === money ? 'selected' : ''}>
              {money.toLocaleString()}원
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default MoneyTab3;
