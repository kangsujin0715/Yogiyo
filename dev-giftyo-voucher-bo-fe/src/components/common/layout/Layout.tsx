import Header from 'src/components/common/header/Header';
import React from 'react';
import { Box } from '@mui/material';
import Nav from 'src/components/ui/menu/Nav';
import styled from 'styled-components';
import MenuList from 'src/components/ui/menu/MenuList';

type AppLayoutProps = {
  children: React.ReactNode;
};

/**
 * 기본 레이아웃 구성
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | undefined | null} children
 * @returns {React.JSX.Element}
 * @author yhju@coopnc.com
 * @since 2023.10.20
 */
const Layout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <FlexBox>
        <Aside>
          <MenuList />
        </Aside>
        <MainContainer>
          <NavContainer>
            <Nav />
          </NavContainer>
          <ContentsContainer>{children}</ContentsContainer>
        </MainContainer>
      </FlexBox>
    </>
  );
};
export default Layout;

const FlexBox = styled(Box)`
  display: flex;
`;

const Aside = styled.aside`
  width: 25.6rem;
  padding: 0.8rem;
  height: calc(100vh - 5.6rem);
`;

const MainContainer = styled(Box)`
  width: calc(100% - 25.6rem);
  padding: 0 3.2rem;
  overflow: hidden;
  background-color: rgba(250, 250, 250, 1);
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 5.6rem;
`;

const ContentsContainer = styled.main`
  height: 100%;
  padding: 0 0 32px 0;
  min-width: 1024px;
`;
