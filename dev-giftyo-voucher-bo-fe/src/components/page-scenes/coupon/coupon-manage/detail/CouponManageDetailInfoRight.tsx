import { Paper, Typography, Box } from '@mui/material';
import styled from 'styled-components';
import { FormRow } from 'src/components/ui/form/shared/FormStyled';
import FormCell from 'src/components/ui/form/shared/FormCell';
import FormArticle from 'src/components/ui/form/FormArticle';
import * as React from 'react';

/**
 *
 * 상품권 상세화면 오른쪽 정보 영역
 * @returns {JSX.Element}
 * @constructor
 * @author jockbal@coopnc.com
 * @since 2023.10.30
 */
const CouponManageDetailInfoRight = () => {
  return (
    <PaperStyle>
      <FormArticle title={'판매정책 기본 정보'}>
        <RightContainerStyle></RightContainerStyle>
        <FormRow>
          <FormCell label="판매정책코드">
            <Typography>csp000003</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="판매유형">
            <Typography>B2C</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="판매정책명">
            <Typography>B2C판매정책_3차</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="상품권 소멸일">
            <Typography>발행일로부터 1826일</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="판매정책 적용일">
            <Typography>2003-09-19</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="판매정책 적용여부">
            <Typography>적용</Typography>
          </FormCell>
        </FormRow>
      </FormArticle>

      <FormArticle title={'최초 유효기간 설정'}>
        <RightContainerStyle></RightContainerStyle>
        <FormRow>
          <FormCell label="물품교환형 유효기간">
            <Typography>발행일로부터 30일</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="잔액관리형 유효기간">
            <Typography>발행일로부터 30일</Typography>
          </FormCell>
        </FormRow>
      </FormArticle>
      <FormArticle title={'유효기간 연장 설정'}>
        <RightContainerStyle></RightContainerStyle>
        <FormRow>
          <FormCell label="연장 가능 여부">
            <Typography>가능</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="연장 가능 횟수">
            <Typography>3회</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="물품교환형 연장일수">
            <Typography>90일 씩 연장처리</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="연장 가능 횟수">
            <Typography>90일 씩 연장처리</Typography>
          </FormCell>
        </FormRow>
      </FormArticle>

      <FormArticle title={'유효기간 종료 전 알림 설정'}>
        <RightContainerStyle></RightContainerStyle>
        <FormRow>
          <FormCell label="최초 유효기간 종료 전">
            <Typography>발송</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="연장된 유효기간 종료 전">
            <Typography>발송안함</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="알림시점">
            <Typography>30일 전, 14일전, 7일전</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="발송템플릿">
            <Typography>LMS, 유효기간 종료 전 안내 템플릿</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="미리보기">
            <Typography>미리보기</Typography>
          </FormCell>
        </FormRow>
      </FormArticle>

      <FormArticle title={'유효기간 종료 후 알림 설정'}>
        <RightContainerStyle></RightContainerStyle>
        <FormRow>
          <FormCell label="최초 유효기간 종료 후">
            <Typography>발송안함</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="연장된 유효기간 종료 후">
            <Typography>발송안함</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="알림시점">
            <Typography>-</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="발송템플릿">
            <Typography>-</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="미리보기">
            <Typography>-</Typography>
          </FormCell>
        </FormRow>
      </FormArticle>

      <FormArticle title={'상품권 사용 시 알림 설정'}>
        <RightContainerStyle></RightContainerStyle>
        <FormRow>
          <FormCell label="알림 발송 여부">
            <Typography>발송안함</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="발송템플릿">
            <Typography>-</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="미리보기">
            <Typography> - </Typography>
          </FormCell>
        </FormRow>
      </FormArticle>

      <FormArticle title={'상품권 관리 설정'}>
        <RightContainerStyle></RightContainerStyle>
        <FormRow>
          <FormCell label="재발송 가능여부">
            <Typography>가능</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="재발 가능횟수">
            <Typography>-</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="수신자 변경 후 재발송 가능여부">
            <Typography> - </Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="발행취소 가능여부">
            <Typography> - </Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="발행취소 후 재발행 가능여부">
            <Typography> - </Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="발행취소 후 재발송 가능여부">
            <Typography> - </Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="환불여부">
            <Typography> - </Typography>
          </FormCell>
        </FormRow>
      </FormArticle>
      <FormArticle title={'등록자/수정자'}>
        <RightContainerStyle></RightContainerStyle>
        <FormRow>
          <FormCell label="등록자">
            <Typography>-</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="등록일시">
            <Typography>-</Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="수정자">
            <Typography> - </Typography>
          </FormCell>
        </FormRow>
        <FormRow>
          <FormCell label="수정일시">
            <Typography> - </Typography>
          </FormCell>
        </FormRow>
      </FormArticle>
    </PaperStyle>
  );
};

export default CouponManageDetailInfoRight;

const PaperStyle = styled(Paper)`
  display: flex;
  width: 400px;
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

const RightContainerStyle = styled(Box)`
  width: 352px;
`;
