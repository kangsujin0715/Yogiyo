import * as React from 'react';

import { Box, Typography, Link } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import CardDesign2 from '../Component/CardDesign2';
import DetailInfo from '../Component/DetailInfo';

import '../css/lineBox.css';

export default function KakaoComplete() {
  return (
    <>
      <CardDesign2/>
      <Box className='padding-box detail-info-box'>
        <Typography variant='h2' className='title'>
          상세 정보
        </Typography>
        <Box className='line-box'>
          <Box className='detail-info underline'>
            <DetailInfo title='보낸 사람' info='위대한상상'/>
            <DetailInfo title='선물명' info='VIPS 3만원'/>
          </Box>
          <Box className='detail-info'>
            <DetailInfo title='상품권 번호' info='123456789'/>
            <DetailInfo title='유효기간' info='2023.04.04까지'/>
          </Box>
        </Box>
		<Box className='btn-box mt-8'>
			<button className='full-btn line'>선물 등록하기</button>
		</Box>
      </Box>
      <List className='notice-box'>
        <ListItem>
			<Box><Link href='#'>상품필수 표기정보</Link>안내</Box>
        </ListItem>
        <ListItem>
			<Box><Link href='#'>선물하기 이용 및 취소/환불 안내</Link></Box>
        </ListItem>
      </List>
    </>
  );
}