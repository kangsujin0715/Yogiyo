import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';

function MoneyTab() {
  const [moneyTab, setMoneyTab] = useState(0);
  const moneyClick = (moneyNumber) => {
    setMoneyTab(moneyNumber);
  };

  const moneyTabList = [
    { price: '10,000원' },
    { price: '15,000원' },
    { price: '20,000원' },
    { price: '30,000원' },
    { price: '50,000원' },
    { price: '100,000원' },
  ];

  return (
    <Box className='horizontal-scroll'>
      <ul className='money-voucher'>
        <li className='disable'>10,000원</li>
		{/* disable 처리 */}
        {moneyTabList.map((list, i) => {
          return (
            <li key={i} onClick={() => moneyClick(i)} className={moneyTab === i ? 'selected' : ''}>
              {list.price}
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

export default MoneyTab;
