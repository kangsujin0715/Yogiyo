import React from 'react';
import { useState } from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import '../../../asset/bo/component-css/LnbTest.css';

import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import OutboundOutlinedIcon from '@mui/icons-material/OutboundOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const lnbMenu = [
    {
      id: 1,
      icon: <CorporateFareRoundedIcon />,
      title: '거래처 관리',
      item: ['사업자', '브랜드', '판매채널'],
    },
    {
      id: 2,
      icon: <ShoppingBagOutlinedIcon />,
      title: '상품 관리',
      item: [
        '기본상품',
        '판매상품',
        '상품 고시정보',
        '상품 공급수수료',
        '상품 판매수수료',
      ],
    },
    {
      id: 3,
      icon: <Inventory2OutlinedIcon />,
      title: '거래 관리',
      item: ['일반거래 신청서', '연동거래 신청서'],
    },
    {
      id: 4,
      icon: <AssessmentOutlinedIcon />,
      title: '통계 관리',
      item: [
        '매출 집계',
        '판매 선수금 집계',
        '유통기간 통계',
        '인지세 납부대상 내역',
      ],
    },
    {
      id: 5,
      icon: <ConfirmationNumberOutlinedIcon />,
      title: '쿠폰 관리',
      item: '쿠폰 조회',
    },
    {
      id: 6,
      icon: <OutboundOutlinedIcon />,
      title: '발행/발송 관리',
      item: ['프리픽스', '발송 템플릿', '인지세 필증번호'],
    },
    {
      id: 7,
      icon: <SettingsOutlinedIcon />,
      title: '시스템 관리',
      item: [
        '운영자',
        '권한',
        '메뉴',
        '판매 정책',
        'API 사용권한',
        'API 근룹',
        '공지사항',
        '감사기록관리',
        '공통코드관리',
      ],
    },
  ];

const LnbTest2 = () => {
  
  return (
    <>
      <List
        className="lnb"
        sx={{ width: '100%', maxWidth: 256 }}
        component="nav"
        aria-labelledby="nested-list-subheader">
        {lnbMenu.map((a, i) => {
          return (
            <>
              <Menu lnbMenu={lnbMenu[i]} key={i}></Menu>
            </>
          );
        })}
      </List>
    </>
  );
};

function Menu(props) {
  const [open, setOpen] = useState([false, false]);
  const handleClick = (i) => {
    const o = { ...open };
    o[i] = !o[i];
    setOpen(o);
  };

  const subMenu = [ ...props.lnbMenu.item ];

  return (
    <>
      <ListItemButton onClick={() => handleClick(0)}>
        <ListItemIcon>{ props.lnbMenu.icon }</ListItemIcon>
        <ListItemText className="lnbTitle" primary={ props.lnbMenu.title } />
        {open[0] ? (
          <ExpandLess fontSize="large" />
        ) : (
          <ExpandMore fontSize="large" />
        )}
      </ListItemButton>

      <Collapse in={open[0]} timeout="auto" unmountOnExit>
        <List component="div" className="lnbItem" disablePadding>
          {
			subMenu.map((a, i) => {
				return (
				<ListItemButton key={i} sx={{ pl: 9, py: 0 }}>
					<ListItemText>{ subMenu[i] }</ListItemText>
				</ListItemButton>
				);
			})
		  }
        </List>
      </Collapse>
    </>
  );
}

export default LnbTest2;
