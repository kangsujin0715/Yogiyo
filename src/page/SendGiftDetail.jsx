import * as React from 'react';

import { Box, Typography, Link } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import CardDesign2 from '../Component/CardDesign2';
import DetailInfo from '../Component/DetailInfo';
import DetailInfoLink from '../Component/DetailInfoLink';
import VoucherInfo from '../Component/VoucherInfo';

import '../css/lineBox.css';

export default function SendGiftDetail() {
  return (
    <>
      <CardDesign2 />
      <VoucherInfo voucher="VIPS 상품권" sale="5%" balance="" price="27,000원" afterPrice="30,000원" giftBoxInfoUrl="/images/gift-part.svg" giftBoxUrl="/images/gift-box.svg"/>
      <VoucherInfo voucher="VIPS 상품권" sale="5%" balance="" price="27,000원" afterPrice="30,000원" giftBoxInfoUrl="/images/gift-complete.svg" giftBoxUrl="/images/gift-box.svg"/>
      <VoucherInfo voucher="VIPS 상품권" sale="5%" balance="" price="27,000원" afterPrice="30,000원" giftBoxInfoUrl="/images/gift-ing.svg" giftBoxUrl="/images/gift-box.svg"/>
      <VoucherInfo voucher="VIPS 상품권" sale="5%" balance="" price="27,000원" afterPrice="30,000원" giftBoxInfoUrl="/images/gift-sending.svg" giftBoxUrl="/images/gift-box.svg"/>
      <VoucherInfo voucher="VIPS 상품권" sale="5%" balance="" price="27,000원" afterPrice="30,000원" giftBoxInfoUrl="/images/gift-cancel.svg" giftBoxUrl="/images/gift-box-cancel.svg"/>
      <Box className="padding-box detail-info-box">
        <Typography variant="h2" className="title">
          상세 정보
        </Typography>
        <Box className="line-box">
          <Box className="detail-info underline">
            <DetailInfo title="받는 사람" info="김민지(010-****-3023)" />
            <DetailInfo title="선물 상태" info="선물 확인중" />
          </Box>
          <Box className="detail-info underline">
            <DetailInfo title="주문번호" info="123456789" />
            <DetailInfo title="구매일시" info="2023.04.04 22:36" />
          </Box>
          <Box className="detail-info underline">
            <DetailInfo title="상품금액" info="30,000원" />
            <DetailInfo title="수량" info="3개" />
            <DetailInfo title="결제수단" info="요기서 1초 결제" />
          </Box>
          <Box className="detail-info txt-16">
            <DetailInfo title="총 결제금액" info="90,000원" />
          </Box>
        </Box>
        <Box className="btn-box mt-8">
          <button className="full-btn line">선물 재발송</button>
          <button className="full-btn line">선물 취소</button>
        </Box>
      </Box>
      <Box className="padding-box detail-info-box">
        <Typography variant="h2" className="title">
          상세 정보
        </Typography>
        <Box className="line-box">
          <Box className="detail-info underline">
            <DetailInfoLink title="받는 사람" infoLink="김민지 외 100명" />
          </Box>
          <Box className="detail-info underline">
            <DetailInfo title="주문번호" info="123456789" />
            <DetailInfo title="구매일시" info="2023.04.04 22:36" />
          </Box>
          <Box className="detail-info underline">
            <DetailInfo title="상품금액" info="30,000원" />
            <DetailInfo title="수량" info="3개" />
            <DetailInfo title="결제수단" info="요기서 1초 결제" />
          </Box>
          <Box className="detail-info txt-16">
            <DetailInfo title="총 결제금액" info="90,000원" />
          </Box>
        </Box>
        <Box className="btn-box mt-8">
          <button className="full-btn line">전체 선물 취소</button>
        </Box>
        <p className="notice-text">이 상품권의 선물취소는 발행사의 고객센터로 문의해주세요.</p>
        <p className="notice-text">
          이 상품권의 환불은 발행사의 고객센터(1661-8191)로 문의해주세요
        </p>
      </Box>
      <List className="notice-box">
        <ListItem>
          <Box>
            <Link href="#">상품필수 표기정보</Link>안내
          </Box>
        </ListItem>
        <ListItem>
          <Box>
            <Link href="#">선물하기 이용 및 취소/환불 안내</Link>
          </Box>
        </ListItem>
      </List>
    </>
  );
}
