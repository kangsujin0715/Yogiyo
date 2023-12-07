import * as React from 'react';

import { Box, Typography, Link } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import CardDesign2 from '../Component/CardDesign2';
import DetailInfo from '../Component/DetailInfo';
import VoucherInfo from '../Component/VoucherInfo';
import UseHistory from '../Component/UseHistory';

import '../css/lineBox.css';

export default function GetGiftDetail() {
  return (
    <>
      <CardDesign2/>
	  <VoucherInfo pVoucher='VIPS 상품권' pSale='' pBalance='잔액' pPrice='30,000원' pAfterPrice='' giftBoxInfoUrl={'/images/gift-unused.svg'} giftBoxUrl='/images/gift-box.svg'/>
	  <VoucherInfo pVoucher='VIPS 상품권' pSale='' pBalance='잔액' pPrice='30,000원' pAfterPrice='' giftBoxInfoUrl={'/images/gift-using.svg'} giftBoxUrl='/images/gift-box.svg'/>
	  <VoucherInfo pVoucher='VIPS 상품권' pSale='' pBalance='잔액' pPrice='0원' pAfterPrice='' giftBoxInfoUrl={'/images/gift-used.svg'} giftBoxUrl='/images/gift-box-cancel.svg'/>
      <Box className='padding-box detail-info-box'>
        <Typography variant='h2' className='title'>
          선물 사용 내역
        </Typography>
        <Box className='line-box'>
          <Box className='detail-info'>
            <DetailInfo pTitle='빕스 고속터미널점' pInfo={<span><em>-5,000원</em> 사용</span>}/>
            <UseHistory pNum='주문번호 0000000000' pDate='2023.04.23 19:53'/>
          </Box>
          <Box className='detail-info line-through'>
            <DetailInfo pTitle='빕스 서초점' pInfo={<span><em>-5,000원</em> 사용취소</span>}/>
            <UseHistory pNum='주문번호 0000000000' pDate='2023.04.23 19:53'/>
          </Box>
          <Box className='detail-info'>
            <DetailInfo pTitle='상품권' pInfo={<span><em>30,000원</em> 등록</span>}/>
            <UseHistory pNum='' pDate='2023.04.23 19:53'/>
          </Box>
        </Box>
	  </Box>
	  <Box className='padding-box detail-info-box'>
        <Typography variant='h2' className='title'>
          상세 정보
        </Typography>
        <Box className='line-box'>
          <Box className='detail-info underline'>
            <DetailInfo pTitle='보낸 사람' pInfo='위대한상상'/>
          </Box>
          <Box className='detail-info underline'>
            <DetailInfo pTitle='상품권 번호' pInfo='123456789'/>
            <DetailInfo pTitle='유효기간' pInfo='2023.04.04 까지'/>
          </Box>
          <Box className='detail-info'>
            <DetailInfo pTitle='상품권금액' pInfo='30,000원'/>
            <DetailInfo pTitle='사용금액' pInfo='30,000원'/>
            <DetailInfo pTitle='잔액' pInfo='0원'/>
          </Box>
        </Box>
		<Box className='btn-box mt-8'>
			<button className='full-btn line'>환불하기</button>
			<button className='full-btn line'>유효기간 연장하기</button>
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
