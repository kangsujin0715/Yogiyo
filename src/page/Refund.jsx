import * as React from 'react';

import { Box, Typography } from '@mui/material';

import RefundInfo from '../Component/RefundInfo';
import DetailInfo from '../Component/DetailInfo';

import '../css/lineBox.css';

export default function Refund() {
  return (
    <>
      <Box className="padding-box detail-info-box mt-0 pt-0">
        <Typography variant="h2" className="title">
          환불요청 상품
        </Typography>
        <Box className="line-box">
          <Box className="detail-info">
            <DetailInfo title="상품권명" info="후라이드참잘하는집 2만원권" />
          </Box>
        </Box>
      </Box>
      <Box className="padding-box detail-info-box">
        <Typography variant="h2" className="title">
          상품권 상세 정보
        </Typography>
        <Box className="line-box">
          <Box className="detail-info">
            <DetailInfo title="상품권 번호(코드)" info="123412341234" />
            <DetailInfo title="상품권 상태" info="유효기간 만료" />
            <DetailInfo title="유효기간" info="2023.01.01 - 2023.01.01" />
          </Box>
        </Box>
      </Box>
	  <RefundInfo/>
      <Box className="padding-box detail-info-box">
        <Typography variant="h2" className="title">
          환불 유의사항
        </Typography>
        <Box className='txt-14'>
            취소가 불가능한 건은 현금 환불 최종 입금액에 포함되어 처리되며, 수수료는 현재 보여지는
            입금액 기준으로 처리됩니다~~~~~ 취소가 불가능한 건은 현금 환불 최종 입금액에 포함되어
            처리되며, 수수료는 현재 보여지는 입금액 기준으로 처리됩니다~~~~~
        </Box>
      </Box>
      <Box className='footer-box btn-box'>
        <button className='full-btn pink'>
          다음
        </button>
      </Box>
    </>
  );
}
