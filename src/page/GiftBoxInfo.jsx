import React from 'react';
import { Box, Typography, Link } from '@mui/material';

import VoucherInfo from '../Component/VoucherInfo';

function TestPage() {
  return (
    <>
	<Typography variant='h2'>보낸 선물 수신자 상태</Typography>
      <VoucherInfo voucher="VIPS 상품권" sale="5%" balance="" price="27,000원" afterPrice="30,000원" giftBoxInfoUrl="/images/gift-ing.svg" giftBoxUrl="/images/gift-box.svg"/>
	  {/* 선물 확인중 */}
      <VoucherInfo voucher="VIPS 상품권" sale="5%" balance="" price="27,000원" afterPrice="30,000원" giftBoxInfoUrl="/images/gift-complete.svg" giftBoxUrl="/images/gift-box.svg"/>
	  {/* 선물 확인완료 */}
      <VoucherInfo voucher="VIPS 상품권" sale="5%" balance="" price="27,000원" afterPrice="30,000원" giftBoxInfoUrl="/images/gift-cancel.svg" giftBoxUrl="/images/gift-box-cancel.svg"/>
	  {/* 선물 취소 */}
	<br/>
	<br/>
	<br/>
	<Typography variant='h2'>보낸 선물 수신자 상태 (다건구매 경우)</Typography>
      <VoucherInfo voucher="VIPS 상품권" sale="5%" balance="" price="27,000원" afterPrice="30,000원" giftBoxInfoUrl="/images/gift-ing.svg" giftBoxUrl="/images/gift-box.svg"/>
	  {/* 선물 확인중 */}
      <VoucherInfo voucher="VIPS 상품권" sale="5%" balance="" price="27,000원" afterPrice="30,000원" giftBoxInfoUrl="/images/gift-part.svg" giftBoxUrl="/images/gift-box.svg"/>
	  {/* 일부 확인완료 */}
      <VoucherInfo voucher="VIPS 상품권" sale="5%" balance="" price="27,000원" afterPrice="30,000원" giftBoxInfoUrl="/images/gift-all-complete.svg" giftBoxUrl="/images/gift-box.svg"/>
	  {/* 전체 확인완료 */}
	  <VoucherInfo voucher='VIPS 상품권' sale='5%' balance='' price='27,000원' afterPrice='30,000원' giftBoxInfoUrl={'/images/gift-all-cancel.svg'} giftBoxUrl='/images/gift-box-cancel.svg'/>
	  {/* 전체 선물취소 */}
	  <VoucherInfo voucher='VIPS 상품권' sale='5%' balance='' price='27,000원' afterPrice='30,000원' giftBoxInfoUrl={'/images/gift-fail.svg'} giftBoxUrl='/images/gift-box-cancel.svg'/>
	  {/* 전체 선물실패 */}
      <VoucherInfo voucher="VIPS 상품권" sale="5%" balance="" price="27,000원" afterPrice="30,000원" giftBoxInfoUrl="/images/gift-sending.svg" giftBoxUrl="/images/gift-box.svg"/>
	  {/* 선물 보내는중 */}
	<br/>
	<br/>
	<br/>
	<Typography variant='h2'>받은 선물 사용 상태</Typography>
	<VoucherInfo voucher='VIPS 상품권' sale='' balance='잔액' price='30,000원' afterPrice='' giftBoxInfoUrl={'/images/gift-unused.svg'} giftBoxUrl='/images/gift-box.svg'/> 
	{/* 선물 미사용 */}
	<VoucherInfo voucher='VIPS 상품권' sale='' balance='잔액' price='30,000원' afterPrice='' giftBoxInfoUrl={'/images/gift-using.svg'} giftBoxUrl='/images/gift-box.svg'/>
	{/* 선물 사용중 */}
	<VoucherInfo voucher='VIPS 상품권' sale='' balance='잔액' price='0원' afterPrice='' giftBoxInfoUrl={'/images/gift-used.svg'} giftBoxUrl='/images/gift-box-cancel.svg'/>
    {/* 선물 사용완료 */}
	<VoucherInfo voucher='요기요 상품권' sale='' balance='잔액' price='30,000원' afterPrice='' giftBoxInfoUrl={'/images/gift-refunding.svg'} giftBoxUrl='/images/gift-box-cancel.svg'/>
	{/* 선물 환불 */}
	</>
  );
}

export default TestPage;