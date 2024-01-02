import React from 'react';

import { Box, Typography } from '@mui/material';

import '../css/phone.css';

function PhoneNumberBtn() {
  const callList = [
    {
      name: '김수환무거북이와두루',
      num: '010-1234-1234',
      btn: (
        <Box className="btn-box">
          <button className="full-btn link">
            선물 취소
          </button>
          <button className="full-btn link">
            선물 재발송
          </button>
        </Box>
      ),
    },
    {
      name: '이름최대10글자일때',
      num: '010-9999-9999',
      btn: (
        <Box className="btn-box">
          <button className="full-btn link">
            선물 취소
          </button>
          <button className="full-btn link">
            선물 재발송
          </button>
        </Box>
      ),
    },
    {
      name: '박민지',
      num: '010-9999-9999',
      btn: (
        <Box className="btn-box">
          <button className="full-btn link">
            선물 취소
          </button>
          <button className="full-btn link">
            선물 재발송
          </button>
        </Box>
      ),
    },
    {
      name: '박민지',
      num: '010-9999-9999',
      btn: (
        <Box className="btn-box">
          <button className="full-btn link">
            선물 취소
          </button>
        </Box>
      ),
    },
  ];
  return (
    <ul className="phone-box">
      {callList.map((list, i) => {
        return (
          <li key={i} className="phone-item">
            <Box className="phone-info-btn">
              <Typography variant="h2" className="name">
                {list.name}
              </Typography>
              <span className="phone">{list.num}</span>
            </Box>
            {list.btn}
          </li>
        );
      })}
    </ul>
  );
}

export default PhoneNumberBtn;
