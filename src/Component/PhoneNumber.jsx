import React from 'react';

import { Box, Typography } from '@mui/material';

import '../css/phone.css';

function PhoneNumber() {
  const callList = [
    {name: '김수환무거북이와두루', num: '010-1234-1234'},
    {name: '김수환무거북이와두루', num: '010-1234-1234'},
    {name: '김수환무거북이와두루', num: '010-1234-1234'},
    {name: '최민지', num: '010-1234-1234'},
  ];
  return (
    <ul className="phone-box">
      {callList.map((list, i) => {
        return (
          <li key={i} className="phone-item">
            <Box className="phone-info">
              <Typography variant="h2" className="name">
                {list.name}
              </Typography>
              <span className="phone">{list.num}</span>
            </Box>
          </li>
        );
      })}
    </ul>
  );
}

export default PhoneNumber;
