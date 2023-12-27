import * as React from 'react';

import { Box, Typography, Link } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import CardDesign2 from '../Component/CardDesign2';
import DetailInfo from '../Component/DetailInfo';
import VoucherInfo from '../Component/VoucherInfo';

import '../css/lineBox.css';

export default function Refunding() {
  return (
    <>
      <CardDesign2/>
	  <VoucherInfo voucher='VIPS 상품권' balance='잔액' price='30,000원' giftBoxInfoUrl='' giftBoxUrl={false}/>
      <Box className='padding-box detail-info-box'>
        <Typography variant='h2' className='title'>
          상세 정보
        </Typography>
        <Box className='line-box'>
          <Box className='detail-info underline'>
            <DetailInfo title='보낸 사람' info='위대한상상'/>
            <DetailInfo title='선물명' info='VIPS 상품권 3만원'/>
          </Box>
          <Box className='detail-info'>
            <DetailInfo title='선물코드' info='123456789'/>
            <DetailInfo title='유효기간' info='2024.04.04 까지'/>
          </Box>
        </Box>
      </Box>
	  <Box className='padding-box detail-info-box'>
        <Typography variant='h2' className='title'>
          환불 신청 정보
        </Typography>
        <Box className='line-box'>
          <Box className='detail-info underline'>
            <DetailInfo title='신청자' info='김요기'/>
            <DetailInfo title='연락처' info='010-1234-1234'/>
            <DetailInfo title='신청일자' info='2023.01.01'/>
          </Box>
          <Box className='detail-info underline'>
            <DetailInfo title='예금주명' info='김요기'/>
            <DetailInfo title='은행명' info='요기은행'/>
            <DetailInfo title='계좌번호' info='0000-0000-0000-0000'/>
            <DetailInfo title='환불사유' info='유효기간 만료'/>
          </Box>
          <Box className='detail-info'>
            <DetailInfo title='환불금액' info='확인중'/>
            <DetailInfo title='' info='환불가능한 금액이 없어 불가합니다.'/>
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
