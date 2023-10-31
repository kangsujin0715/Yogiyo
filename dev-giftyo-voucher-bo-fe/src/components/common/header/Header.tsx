import { ReactElement } from 'react';
import { Button } from '@mui/material';
import { Logout } from '@mui/icons-material';
import styled from 'styled-components';
import Link from 'next/link';

/**
 * 헤더 컴포넌트
 * @returns {React.ReactElement}
 * @author yhju@coopnc.com
 * @since 2023.10.20
 */
const Header = (): ReactElement => {
  return (
    <StyledHeader>
      <Link href="#">
        <LogoImage src="/images/Yogiyo_logo.svg" alt="요기요 로고" />
      </Link>
      <HeaderButtonWrap>
        <HeaderButton>운영매뉴얼</HeaderButton>
        <HeaderButton>YOGIYO(요기요)</HeaderButton>
        <HeaderButton endIcon={<Logout />}>로그아웃</HeaderButton>
      </HeaderButtonWrap>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 5.6rem;
  padding: 0 2.4rem !important;
  display: flex !important;
  align-items: center;
  background-color: rgb(51, 51, 51);
`;

const LogoImage = styled.img`
  width: auto;
  height: 2.4rem;
`;

const HeaderButtonWrap = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const HeaderButton = styled(Button)`
  color: rgba(255, 255, 255, 1);
  border-radius: 0;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0 1.6rem;
  border-left: 0.1rem solid rgba(0, 0, 0, 1);

  :first-child {
    border-left: 0;
  }

  :last-child {
    padding-right: 0;
  }
`;

export default Header;
