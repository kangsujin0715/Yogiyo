import React from 'react';
import { Box, Typography } from '@mui/material';

// import required modules
// import CardSwiper from './CardSwiper';
import AppPay from './AppPay';

import '../css/apppay.css';

export default function CardPayment() {
  return (
    <Box className="payment-box">
      {/* <Box className="payment-list">
        <input type="radio" id="card" name="pay" defaultChecked={true}/>
        <label htmlFor="card" className="pay flex">
          <Typography variant="h2" className="title">
            요기서 1초 결제
            <button className="info"></button>
            <Box className="info-box">
              <p>
                첫 결제 완료 이후부터 결제 금액이 5만원 미만인 주문은
                <span> 비밀번호 확인없이 결제가 가능합니다.</span>
              </p>
            </Box>
          </Typography>
          <button className="card-btn">카드 관리</button>
        </label>
      </Box>
      <CardSwiper /> */}
      <Box className="payment-list">
        {/* <input type="radio" id="app" name="pay" />
        <label htmlFor="app" className='pay'>
        </label> */}
		<Typography variant="h2" className="title app">
            요기서 결제
          </Typography>
      </Box>
      <AppPay />
    </Box>
  );
}
