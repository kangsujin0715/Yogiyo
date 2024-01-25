import * as React from 'react';

import { Box, Typography, Link } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import CardBox from '../Component/CardBox';
import ToBox from '../Component/ToBox';
import Payment from '../Component/Payment';

import '../css/payment.css';

export default function GiftDetail() {
  return (
    <>
      <CardBox/>
	  <ToBox/>
	
      <Box className='padding-box'>
        <Typography variant='h2' className='title'>
          보내는 사람
        </Typography>
        <input placeholder='이름' variant='outlined' />
      </Box>
      <Box className='padding-box'>
			<Payment/>
        <Box className='gird-box pay-result-box'>
        	<img src='/images/samsung.svg' alt='' />
          <span className='num'>**** 1234</span>
        </Box>
      </Box>
      <Box className='padding-box'>
        <Box className='underline gird-box'>
          <Typography variant='h3'>상품권금액</Typography>
          <span className='price'>
            <em>30,000</em>원
          </span> 
        </Box>
        <Box className='gird-box'>
          <Typography variant='h2' className='title mb0'>
            총 결제금액
          </Typography>
          <strong className='price'>
            <em>30,000</em>원
          </strong>
        </Box>
      </Box>
      <List className='notice-box'>
        <ListItem>
            <Box><Link href='#'>개인정보 수집 및 제3자 제공 내용</Link>에 동의합니다.</Box>
        </ListItem>
        <ListItem>
			<Box><Link href='#'>선물하기 이용 및 취소/환불 안내</Link>를 숙지하였습니다.</Box>
        </ListItem>
        <ListItem>
			<Box>위 내용을 확인하였으며, 결제에 동의합니다.</Box>
        </ListItem>
      </List>
      <Box className='btn-box'>
        <button className='full-btn pink' disabled>
          20,000원 선물 결제하기
        </button>
      </Box>
    </>
  );
}
