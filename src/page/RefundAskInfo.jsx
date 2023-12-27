import * as React from 'react';

import { Box, Typography } from '@mui/material';

import DetailInfo from '../Component/DetailInfo';

import '../css/lineBox.css';
import '../css/checkbox.css';

export default function RefundAskInfo() {
  return (
    <Box className='hw-box'>
      <Box className="padding-box detail-info-box mt-0 pt-0">
        <Typography variant="h2" className="title">
          환불신청 정보
        </Typography>
        <Box className="line-box">
          <Box className="detail-info underline">
            <DetailInfo pTitle="신청자" pInfo="김요기" />
            <DetailInfo pTitle="연락처" pInfo="010-1234-1234" />
            <DetailInfo pTitle="신청일자" pInfo="2023.01.01" />
            <DetailInfo pTitle="상품권명" pInfo="후라이드참잘하는집 2만원권" />
            <DetailInfo pTitle="환불사유" pInfo="유효기간 만료" />
          </Box>
          <Box className="detail-info">
            <DetailInfo pTitle="예금주명" pInfo="김요기" />
            <DetailInfo pTitle="은행명" pInfo="요기은행" />
            <DetailInfo pTitle="계좌번호" pInfo="0000-0000-0000-0000" />
          </Box>
        </Box>
        <Box className='mt-8 check-box'>
			<input type="checkbox" id='check' />
			<label htmlFor='check'>
				상품권 환불을 위한 개인정보 수집·이용에 동의합니다.
				<span></span>
			</label>
		</Box>
      </Box>
		<Box className='btn-box '>
			<button className='full-btn pink' disabled>
			환불신청
			</button>
		</Box>
    </Box>
  );
}
