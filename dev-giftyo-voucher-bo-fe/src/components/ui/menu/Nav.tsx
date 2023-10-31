import * as React from 'react';
import styled from 'styled-components';

/**
 * 컨텐츠 상단 네비게이션 컴포넌트
 * FIXME: 추후 라우팅 경로에 따라 데이터와 함께 표기
 * @returns {React.JSX.Element}
 * @author yhju@coopnc.com
 * @since 2023.10.20
 */
const Nav = () => {
  return (
    <StyledNav>
      <li>
        <a href="#">거래처관리</a>
      </li>
      <li>
        <a href="#">사업자</a>
      </li>
      <li>
        <a href="#">등록</a>
      </li>
    </StyledNav>
  );
};
export default Nav;

const StyledNav = styled.ul`
  display: flex;
  align-items: center;

  li {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 400;
    padding-right: 0.8rem;
    color: rgba(0, 0, 0, 0.6);

    :after {
      content: '/';
      width: 0.7rem;
      height: 2.4rem;
      padding-left: 0.8rem;
    }

    &:last-child a {
      padding-right: 0;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.87);
    }

    &:last-child a {
      &:after {
        display: none;
      }
    }
  }
`;
