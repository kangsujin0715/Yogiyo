import * as React from 'react';
import { ReactNode } from 'react';
import {
  AssessmentOutlined,
  ConfirmationNumberOutlined,
  CorporateFareRounded,
  Inventory2Outlined,
  OutboundOutlined,
  SettingsOutlined,
  ShoppingBagOutlined,
} from '@mui/icons-material';
import { List } from '@mui/material';
import MenuListItem from 'src/components/ui/menu/MenuListItem';
import styled from 'styled-components';

/**
 * 메뉴 아이템 인터페이스
 * @property {number} id
 * @property {string} title
 * @property {ReactNode} icon
 * @property {MenuListItem[]} subMenu
 * @property {string} link
 */
export interface MenuItem {
  id: number;
  title: string;
  icon?: ReactNode;
  subMenu?: MenuItem[];
  link?: string;
}

const menuList: MenuItem[] = [
  {
    id: 1,
    icon: <CorporateFareRounded />,
    title: '거래처 관리',
    subMenu: [
      { id: 1, title: '사업자', link: '/customer/list' },
      { id: 2, title: '브랜드', link: '/customer/brand/list' },
      { id: 3, title: '판매채널' },
    ],
  },
  {
    id: 2,
    icon: <ShoppingBagOutlined />,
    title: '상품 관리',
    subMenu: [
      { id: 1, title: '기본상품' },
      { id: 2, title: '판매상품' },
      { id: 3, title: '상품 고시정보' },
      { id: 4, title: '상품 공급수수료' },
      { id: 5, title: '상품 판매수수료' },
    ],
  },
  {
    id: 3,
    icon: <Inventory2Outlined />,
    title: '거래 관리',
    subMenu: [
      { id: 1, title: '일반거래 신청서' },
      { id: 2, title: '연동거래 신청서' },
    ],
  },
  {
    id: 4,
    icon: <AssessmentOutlined />,
    title: '통계 관리',
    subMenu: [
      { id: 1, title: '매출 집계' },
      { id: 2, title: '판매 선수금 집계' },
      { id: 3, title: '유통기간 통계' },
      { id: 4, title: '인지세 납부대상 내역' },
    ],
  },
  {
    id: 5,
    icon: <ConfirmationNumberOutlined />,
    title: '쿠폰 관리',
    subMenu: [{ id: 1, title: '쿠폰 조회' }],
  },
  {
    id: 6,
    icon: <OutboundOutlined />,
    title: '발행/발송 관리',
    subMenu: [
      { id: 1, title: '프리픽스' },
      { id: 2, title: '발송 템플릿' },
      { id: 3, title: '인지세 필증번호' },
    ],
  },
  {
    id: 7,
    icon: <SettingsOutlined />,
    title: '시스템 관리',
    subMenu: [
      { id: 1, title: '운영자' },
      { id: 2, title: '권한' },
      { id: 3, title: '메뉴' },
      { id: 4, title: '판매 정책' },
      { id: 5, title: 'API 사용권한' },
      { id: 6, title: 'API 근룹' },
      { id: 7, title: '공지사항' },
      { id: 8, title: '감사기록관리' },
      { id: 9, title: '공통코드관리' },
    ],
  },
];
/**
 * 메뉴 목록
 * FIXME: 추후 데이터 기반 메뉴 목록으로 전환
 * @returns {React.JSX.Element}
 * @author yhju@coopnc.com
 * @since 2023.10.20
 */
const MenuList = () => {
  return (
    <StyledMenuList
      className="lnb"
      sx={{ width: '100%', maxWidth: 256 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {menuList.map((menu) => {
        return <MenuListItem {...menu} key={menu.id} />;
      })}
    </StyledMenuList>
  );
};
export default MenuList;

const StyledMenuList = styled(List)`
  & .MuiListItemIcon-root svg {
    width: 24px;
    height: 24px;
  }
`;
