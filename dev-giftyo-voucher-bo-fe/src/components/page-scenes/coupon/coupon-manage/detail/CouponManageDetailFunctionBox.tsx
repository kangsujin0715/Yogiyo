import { ButtonGroup, Container, Button, Stack } from '@mui/material';
import styled from 'styled-components';
import SplitButtonGroup from 'src/components/ui/button/SplitButton';

const options = [
  { tag: 1, title: '유효기간 연장(판매정책 제외)' },
  { tag: 2, title: '재발송(판매정책 제외)' },
  { tag: 3, title: '수신자정보 변경 후 재발송(판매정책 제외)' },
  { tag: 4, title: '발행취소(판매정책 제외)' },
  { tag: 5, title: '발행취소 후 재발행(판매정책 제외)' },
  { tag: 6, title: '발행취소 후 재발송(판매정책 제외)' },
];

/**
 *
 * 상품권 정보 상세보기 기능 버튼 영역
 * @returns {JSX.Element}
 * @constructor
 * @author jockbal@coopnc.com
 * @since 2023.10.30
 */
const CouponManageDetailFunctionBox = () => {
  return (
    <CouponDetailContainerStyle>
      <Stack direction="row" spacing={1}>
        <CouponDetailButtonGroupStyle>
          <CouponDetailButtonStyle>발행취소 후 재발송</CouponDetailButtonStyle>
          <CouponDetailButtonStyle>발행취소 후 재발행</CouponDetailButtonStyle>
          <CouponDetailButtonStyle>발행취소</CouponDetailButtonStyle>
          <CouponDetailButtonStyle>수신자번호 변경 후 재발송</CouponDetailButtonStyle>
          <CouponDetailButtonStyle>재발송</CouponDetailButtonStyle>
          <CouponDetailButtonStyle>유효기간연장</CouponDetailButtonStyle>
        </CouponDetailButtonGroupStyle>

        <SplitButtonGroup
          handleOptionClick={(tag, title) => console.log(tag + ' / ' + title)}
          options={options}
        />
      </Stack>
    </CouponDetailContainerStyle>
  );
};

export default CouponManageDetailFunctionBox;

const CouponDetailContainerStyle = styled(Container)`
  display: flex;
  width: 1184px;
  padding: var(--none, 0px) var(--4, 32px) var(--2, 16px) var(--4, 32px);
  justify-content: flex-end;
  align-items: flex-end;
  gap: var(--none, 0px);
  border-radius: var(--none, 0px);
`;

const CouponDetailButtonGroupStyle = styled(ButtonGroup)`
  display: flex;
  align-items: center;
  border-radius: var(--borderRadius, 4px);
  //border: 1px solid var(--primary-outlined-border, rgba(33, 150, 243, 0.50));
`;
const CouponDetailButtonStyle = styled(Button)`
  display: flex;
  padding: 6px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--borderRadius, 4px);
`;
