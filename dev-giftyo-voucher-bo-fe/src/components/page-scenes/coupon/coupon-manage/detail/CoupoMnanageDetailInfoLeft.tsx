import { Paper, Typography, Box } from '@mui/material';
import styled from 'styled-components';
import * as React from 'react';
import TabView from 'src/components/ui/tab/TabView';
import FormArticle from 'src/components/ui/form/FormArticle';
import { FormRow } from 'src/components/ui/form/shared/FormStyled';
import FormCell from 'src/components/ui/form/shared/FormCell';
import CouponManageDetailInfoLeftTable from 'src/components/page-scenes/coupon/coupon-manage/detail/CouponManageDetailInfoLeftTable';
import { CouponDetailData } from 'src/interface/coupon/CouponManage.interface';

const columns = [
  'No',
  '발송유형',
  '발송방식',
  '발송결과',
  '발송번호',
  '수신자번호',
  '발송일시',
  '처리자',
  '처리일시',
  '사유',
  '비고',
];

/**
 *
 * 상품권상세 왼쪽 정보 영역
 * @returns {React.JSX.Element}
 * @constructor
 * @author jockbal@coopnc.com
 * @since 2023.11.01
 */
const LeftInfoArea = () => {
  return (
    <>
      <FormArticle title={'발행정보'} unMask={() => {}}>
        <LeftContainerStyle></LeftContainerStyle>
        <FormRow>
          <FormCell label="발행요청정보">
            <Typography>123456789</Typography>
          </FormCell>
          <FormCell label="상품권번호">
            <Typography>1234****9</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="유효기간">
            <Typography>2024-01-01 ~2024-12-31</Typography>
          </FormCell>
          <FormCell label="상품권 소멸일">
            <Typography>1826일(2027-01-01)</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="발행일시">
            <Typography>2023-01-01 12:00:03</Typography>
          </FormCell>
          <FormCell label="발행취소일시">
            <Typography>2023-01-01 12:00:03</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="상품권상태">
            <Typography>발행취소</Typography>
          </FormCell>
          <FormCell label="사용여부">
            <Typography>사용안함</Typography>
          </FormCell>
        </FormRow>
      </FormArticle>
      <FormArticle title={'발송정보'}>
        <LeftContainerStyle></LeftContainerStyle>
        <FormRow>
          <FormCell label="발송번호">
            <Typography>1644-****</Typography>
          </FormCell>
          <FormCell label="수신자번호">
            <Typography>010-****-1234</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="발송타입">
            <Typography>알림톡</Typography>
          </FormCell>
          <FormCell label="발송일시">
            <Typography>2023-01-01 12:00:03</Typography>
          </FormCell>
        </FormRow>
      </FormArticle>
      <FormArticle title={'상품 정보'}>
        <LeftContainerStyle></LeftContainerStyle>
        <FormRow>
          <FormCell label="판매유형">
            <Typography>B2B(In-app, 무상제공, 카카오)</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="브랜드명">
            <Typography>요기요</Typography>
          </FormCell>
          <FormCell label="상품명">
            <Typography>요기요 1만원권</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="권면가액">
            <Typography>10,000원</Typography>
          </FormCell>
          <FormCell label="상품종류">
            <Typography>요기요 상품권(잔액관리형)</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="할인가">
            <Typography>0원</Typography>
          </FormCell>
          <FormCell label="판매가">
            <Typography>10,000원</Typography>
          </FormCell>
        </FormRow>
      </FormArticle>
      <FormArticle title={'신청서 정보'}>
        <LeftContainerStyle></LeftContainerStyle>
        <FormRow>
          <FormCell label="판매채널">
            <Typography>요기요</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="신청서구분">
            <Typography>연동</Typography>
          </FormCell>
          <FormCell label="신청서명">
            <Typography>요기요 연동서비스</Typography>
          </FormCell>
        </FormRow>
      </FormArticle>
    </>
  );
};

const tabs = (couponNum: string) => [
  {
    text: '발송내역',
    panel: <CouponManageDetailInfoLeftTable columns={columns} couponNum={couponNum} />,
  },
  {
    text: '사용내역',
    panel: <>222</>,
  },
  {
    text: '처리내역',
    panel: <>333</>,
  },
];

export interface DetailLeftInfoProps {
  data: CouponDetailData;
}

/**
 *
 * @returns {JSX.Element}
 * @constructor
 * @author jockbal@coopnc.com
 * @since 2023.10.30
 */
const CoupoMnanageDetailInfoLeft = (props: DetailLeftInfoProps) => {
  return (
    <PaperStyle>
      <LeftInfoArea />
      <TabView tabs={tabs(props.data.couponNum)} />
    </PaperStyle>
  );
};

export default CoupoMnanageDetailInfoLeft;

const PaperStyle = styled(Paper)`
  overflow-x: auto;
  display: flex;
  width: 704px;
  height: 3038px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: var(--borderRadius, 4px);
  background: var(--background-paper-elevation-1, #fff);
  /* elevation/1 */
  box-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const LeftContainerStyle = styled(Box)`
  display: flex;
  width: 656px;
  padding: var(--none, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--2, 16px);
  border-radius: var(--none, 0px);
`;
