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
	  <VoucherInfo pVoucher='VIPS 상품권' pSale='5%' pBalance='' pPrice='27,000원' pAfterPrice='30,000원' giftBoxInfoUrl='/images/gift-complete.svg' giftBoxUrl='/images/gift-box.svg'/>
	  <VoucherInfo pVoucher='VIPS 상품권' pSale='5%' pBalance='' pPrice='27,000원' pAfterPrice='30,000원' giftBoxInfoUrl='/images/gift-ing.svg' giftBoxUrl='/images/gift-box.svg'/>
      <Box className='padding-box detail-info-box'>
        <Typography variant='h2' className='title'>
          상세 정보
        </Typography>
        <Box className='line-box'>
          <Box className='detail-info underline'>
            <DetailInfo pTitle='받는 사람' pInfo='김민지(010-****-3023)'/>
            <DetailInfo pTitle='선물명' pInfo='VIPS 3만원'/>
          </Box>
          <Box className='detail-info underline'>
            <DetailInfo pTitle='주문번호' pInfo='123456789'/>
            <DetailInfo pTitle='구매일시' pInfo='2023.04.04 22:36'/>
          </Box>
          <Box className='detail-info'>
            <DetailInfo pTitle='결제수단' pInfo='요기서 1초 결제'/>
            <DetailInfo pTitle='상품권금액' pInfo='30,000원'/>
            <DetailInfo pTitle='결제금액' pInfo='27,000원'/>
          </Box>
        </Box>
		<Box className='btn-box mt-8'>
			<button className='full-btn line'>선물 취소하기</button>
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
