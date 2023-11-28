import * as React from 'react';

import { Box, Typography, Link } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import '../css/common.css';

import CardDesign2 from '../Component/CardDesign2';

export default function KakaoComplete() {
  return (
    <>
      <CardDesign2></CardDesign2>
      <Box className="padding-box detail-info-box">
        <Typography variant="h2" className="title">
          상세 정보
        </Typography>
        <Box className="line-box">
          <Box className="detail-info underline">
            <Box className="gird-box">
              <Typography variant="h3">보낸 사람</Typography>
              <p className="txt-14">위대한상상</p>
            </Box>
            <Box className="gird-box">
              <Typography variant="h3">선물명</Typography>
              <p className="txt-14">VIPS 3만원권</p>
            </Box>
          </Box>
          <Box className='detail-info'>
            <Box className="gird-box">
              <Typography variant="h3">상품권 번호</Typography>
              <p className="txt-14">123456789</p>
            </Box>
            <Box className="gird-box">
              <Typography variant="h3">유효기간</Typography>
              <p className="txt-14">2023.04.04 까지</p>
            </Box>
          </Box>
        </Box>
        <button className="full-btn line">선물 등록하기</button>
      </Box>
      <List className="notice-box">
        <ListItem>
          <Link href="#">상품필수 표기정보</Link>안내
        </ListItem>
        <ListItem>
          <Link href="#">선물하기 이용 및 취소/환불 안내</Link>
        </ListItem>
      </List>
    </>
  );
}
