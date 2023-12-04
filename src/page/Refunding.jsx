import * as React from 'react';

import { Box, Typography, Link } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import CardDesign2 from '../Component/CardDesign2';
import DetailInfo from '../Component/DetailInfo';
import VoucherInfo from '../Component/VoucherInfo';

import '../css/lineBox.css';

export default function SendGiftDetail() {
  return (
    <>
      <CardDesign2/>
	  <VoucherInfo pVoucher='VIPS 상품권' pBalance='잔액' pPrice='30,000원' giftBoxInfoUrl='' giftBoxUrl={false}/>
      <Box className='padding-box detail-info-box'>
        <Typography variant='h2' className='title'>
          상세 정보
        </Typography>
        <Box className='line-box'>
          <Box className='detail-info underline'>
            <DetailInfo pTitle='보낸 사람' pInfo='위대한상상'/>
            <DetailInfo pTitle='선물명' pInfo='VIPS 3만원'/>
          </Box>
          <Box className='detail-info'>
            <DetailInfo pTitle='선물코드' pInfo='123456789'/>
            <DetailInfo pTitle='유효기간' pInfo='2024.04.04 까지'/>
          </Box>
        </Box>
      </Box>
	  <Box className='padding-box detail-info-box'>
        <Typography variant='h2' className='title'>
          환불 신청 정보
        </Typography>
        <Box className='line-box'>
          <Box className='detail-info underline'>
            <DetailInfo pTitle='신청자' pInfo='김요기'/>
            <DetailInfo pTitle='연락처' pInfo='010-1234-1234'/>
            <DetailInfo pTitle='신청일자' pInfo='2023.01.01'/>
          </Box>
          <Box className='detail-info underline'>
            <DetailInfo pTitle='예금주명' pInfo='김요기'/>
            <DetailInfo pTitle='은행명' pInfo='요기은행'/>
            <DetailInfo pTitle='계좌번호' pInfo='0000-0000-0000-0000'/>
            <DetailInfo pTitle='환불사유' pInfo='유효기간 만료'/>
          </Box>
          <Box className='detail-info'>
            <DetailInfo pTitle='환불금액' pInfo='확인중'/>
            <DetailInfo pTitle='' pInfo='환불가능한 금액이 없어 불가합니다.'/>
          </Box>
        </Box>
      </Box>
      <List className='notice-box'>
        <ListItem>
          <Link href='#'>상품필수 표기정보</Link>안내
        </ListItem>
        <ListItem>
          <Link href='#'>선물하기 이용 및 취소/환불 안내</Link>
        </ListItem>
      </List>
    </>
  );
}
