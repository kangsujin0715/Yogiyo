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
	  <VoucherInfo voucher='VIPS 상품권' sale='' balance='잔액' price='30,000원' afterPrice='' giftBoxInfoUrl={'/images/gift-unused.svg'} giftBoxUrl='/images/gift-box.svg'/>
	  {/* <VoucherInfo voucher='VIPS 상품권' sale='' balance='잔액' price='30,000원' afterPrice='' giftBoxInfoUrl={'/images/gift-using.svg'} giftBoxUrl='/images/gift-box.svg'/>
	  <VoucherInfo voucher='VIPS 상품권' sale='' balance='잔액' price='0원' afterPrice='' giftBoxInfoUrl={'/images/gift-used.svg'} giftBoxUrl='/images/gift-box-cancel.svg'/> */}
	  <Box className='padding-box detail-info-box'>
        <Typography variant='h2' className='title'>
          상세 정보
        </Typography>
        <Box className='line-box'>
          <Box className='detail-info underline'>
            <DetailInfo title='보낸 사람' info='위대한상상'/>
          </Box>
          <Box className='detail-info underline'>
            <DetailInfo title='상품권 번호' info='123456789'/>
            <DetailInfo title='유효기간' info='2023.04.04 까지'/>
          </Box>
          <Box className='detail-info'>
            <DetailInfo title='상품권금액' info='30,000원'/>
            <DetailInfo title='사용금액' info='30,000원'/>
            <DetailInfo title='잔액' info='0원'/>
          </Box>
        </Box>
		<Box className='btn-box mt-8'>
			<button className='full-btn line'>선물 등록하기</button>
		</Box>
		<Box className='btn-box mt-8'>
			<button className='full-btn line'>환불하기</button>
			<button className='full-btn line'>유효기간 연장하기</button>
		</Box>
		<p className="notice-text">이 상품권은 기업전용 상품권으로 환불 및 연장이 불가합니다.</p>
		<p className="notice-text">이 상품권의 환불은 발행사의 고객센터(1661-8191)로 문의해주세요</p>
      </Box>
	  <Box className='padding-box detail-info-box'>
        <Typography variant='h2' className='title'>
          선물 사용 내역
        </Typography>
        <Box className='line-box'>
          <Box className='detail-info'>
            <DetailInfo title='상품권' info={<span><em>30,000원</em> 등록</span>}/>
            <UseHistory num='' date='2023.04.23 19:53'/>
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
          <Box className='detail-info'>
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
          선물 사용 내역
        </Typography>
        <Box className='line-box'>
          <Box className='detail-info'>
            <DetailInfo title='빕스 고속터미널점' info={<span><em>-5,000원</em> 사용</span>}/>
            <UseHistory num='주문번호 0000000000' date='2023.04.23 19:53'/>
          </Box>
          <Box className='detail-info'>
            <DetailInfo title='빕스 서초점' info={<span><em>-5,000원</em> 사용취소</span>}/>
            <UseHistory num='주문번호 0000000000' date='2023.04.23 19:53'/>
          </Box>
          <Box className='detail-info'>
            <DetailInfo title='상품권' info={<span><em>30,000원</em> 등록</span>}/>
            <UseHistory num='' date='2023.04.23 19:53'/>
          </Box>
		  <Box className='more-box'>
			<button>더보기</button>
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
