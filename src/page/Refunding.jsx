import * as React from 'react';

import { Box, Typography, Link } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import CardDesign2 from '../Component/CardDesign2';
import DetailInfo from '../Component/DetailInfo';
import VoucherInfo from '../Component/VoucherInfo';
import UseHistory from '../Component/UseHistory';

import '../css/lineBox.css';

export default function Refunding() {
  return (
    <>
      <CardDesign2/>
	  <VoucherInfo voucher='요기요 상품권' sale='' balance='잔액' price='30,000원' afterPrice='' giftBoxInfoUrl={'/images/gift-using.svg'} giftBoxUrl='/images/gift-box.svg'/>
	  <VoucherInfo voucher='요기요 상품권' sale='' balance='잔액' price='30,000원' afterPrice='' giftBoxInfoUrl={'/images/gift-refunding.svg'} giftBoxUrl='/images/gift-box-cancel.svg'/>
      <Box className='padding-box detail-info-box'>
        <Typography variant='h2' className='title'>
          상세 정보
        </Typography>
        <Box className='line-box'>
          <Box className='detail-info underline'>
            <DetailInfo title='보낸 사람' info='위대한상상'/>
          </Box>
          <Box className='detail-info'>
            <DetailInfo title='선물코드' info='123456789'/>
            <DetailInfo title='유효기간' info='2024.04.04 까지'/>
          </Box>
        </Box>
      </Box>

	  <Box className='padding-box detail-info-box'>
        <Typography variant='h2' className='title'>
          선물 사용 내역
        </Typography>
        <Box className='line-box'>
          <Box className='detail-info'>
            <DetailInfo title='빕스 고속터미널점' info={<span><em>-5,000원</em> 사용</span>}/>
            <UseHistory num='주문번호 0000000000' date='2023.04.23 19:53'/>
          </Box>
          <Box className='detail-info line-through'>
            <DetailInfo title='빕스 서초점' info={<span><em>-5,000원</em> 사용취소</span>}/>
            <UseHistory num='주문번호 0000000000' date='2023.04.23 19:53'/>
          </Box>
          <Box className='detail-info'>
            <DetailInfo title='상품권' info={<span><em>30,000원</em> 등록</span>}/>
            <UseHistory num='' date='2023.04.23 19:53'/>
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
            <DetailInfo title='' info='어떠한 이유로 환불이 불가합니다.'/>
          </Box>
        </Box>
      </Box>
      <List className='notice-box'>
        <ListItem>
        	<Box><Link href='#'>상품필수 표기정보</Link>안내</Box>
        </ListItem>
        <ListItem>
			<Box><Link href='#'>선물하기 이용 및 취소/환불 안내</Link></Box>
        </ListItem>
        <ListItem>
			<Box>상품권 <Link href='#'>이용가능 매장</Link>안내</Box>
        </ListItem>
      </List>
    </>
  );
}