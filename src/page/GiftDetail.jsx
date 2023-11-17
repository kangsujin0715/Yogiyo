import * as React from 'react';
import CardView from '../Component/CardView';
import From from '../Component/From';
import { Box, Typography, Link } from '@mui/material';
import '../css/common.css'

export default function GiftDetail() {
  return (
    <>
      <CardView></CardView>
      <Box className="padding-box">
        <Typography variant="h2" className="inline title star">
          받는 사람
        </Typography>
        <span>&#40;최대 100명&#41;</span>
        <From></From>
      </Box>
      <Box className="padding-box">
        <Typography variant="h2" className="title">
          보내는 사람
        </Typography>
        <input placeholder="이름" variant="outlined" />
      </Box>
      <Box className="padding-box gird-box">
        <Typography variant="h2" className="title mb0">
          결제수단
        </Typography>
        <button className="pay-btn red">결제수단을 선택해주세요</button>
      </Box>
      <Box className="padding-box">
        <Box className="line gird-box">
          <Typography variant="h3">상품권금액</Typography>
          <span className="price">
            <em>30,000</em>원
          </span>
        </Box>
        <Box className="gird-box">
          <Typography variant="h2" className="title mb0">
            총 결제금액
          </Typography>
          <strong className="price">
            <em>30,000</em>원
          </strong>
        </Box>
      </Box>
      <ul className="notice-box">
        <li>
          <p>
            <Link href="#">개인정보 수집 및 제3자 제공 내용</Link>에 동의합니다.
          </p>
        </li>
        <li>
          <p>
            <Link href="#">선물하기 이용 및 취소/환불 안내</Link>를 숙지하였습니다.
          </p>
        </li>
        <li>
          <p>위 내용을 확인하였으며, 결제에 동의합니다.</p>
        </li>
      </ul>
      <Box className="btn-box">
        <button className="full-btn pink" disabled>
          20,000원 선물 결제하기
        </button>
      </Box>
    </>
  );
}
