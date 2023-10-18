import React from 'react';
import { useState } from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import OutboundOutlinedIcon from '@mui/icons-material/OutboundOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import '../../../asset/bo/component-css/LnbTest.css';

const LnbTest = () => {
  const [open, setOpen] = useState([false, false, false, false, false, false, false]);
  const handleClick = (i) => {
    const click = { ...open };
    click[i] = !click[i];
    setOpen(click);
  };

  return (
    <>
      <List
        sx={{ width: '100%', py: 0, maxWidth: 256 }}
        component="aside"
        aria-labelledby="nested-list-subheader">
        <ListItemButton onClick={() => handleClick(0)}>
          <ListItemIcon>
            <CorporateFareRoundedIcon />
          </ListItemIcon>
          <ListItemText className="lnbTitle" primary="거래처 관리" />
          {open[0] ? (
            <ExpandLess fontSize="large" />
          ) : (
            <ExpandMore fontSize="large" />
          )}
        </ListItemButton>

        <Collapse in={open[0]} timeout="auto" unmountOnExit>
          <List component="div" className="lnbItem" disablePadding>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="사업자" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="브랜드" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="판매채널" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => handleClick(1)}>
          <ListItemIcon>
            <ShoppingBagOutlinedIcon />
          </ListItemIcon>
          <ListItemText className="lnbTitle" primary="상품 관리" />
          {open[1] ? (
            <ExpandLess fontSize="large" />
          ) : (
            <ExpandMore fontSize="large" />
          )}
        </ListItemButton>
        <Collapse in={open[1]} timeout="auto" unmountOnExit>
          <List component="div" className="lnbItem" disablePadding>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="기본상품" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="판매상품" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="상품 고시정보" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="상품 공급수수료" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="상품 판매수수료" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => handleClick(2)}>
          <ListItemIcon>
            <Inventory2OutlinedIcon />
          </ListItemIcon>
          <ListItemText className="lnbTitle" primary="거래 관리" />
          {open[2] ? (
            <ExpandLess fontSize="large" />
          ) : (
            <ExpandMore fontSize="large" />
          )}
        </ListItemButton>
        <Collapse in={open[2]} timeout="auto" unmountOnExit>
          <List component="div" className="lnbItem" disablePadding>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="일반거래 신청서" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="연동거래 신청서" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => handleClick(3)}>
          <ListItemIcon>
            <AssessmentOutlinedIcon />
          </ListItemIcon>
          <ListItemText className="lnbTitle" primary="통게 관리" />
          {open[3] ? (
            <ExpandLess fontSize="large" />
          ) : (
            <ExpandMore fontSize="large" />
          )}
        </ListItemButton>
        <Collapse in={open[3]} timeout="auto" unmountOnExit>
          <List component="div" className="lnbItem" disablePadding>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="매출 집계" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="판매 선수금 집계" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="유통기간 통계" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="인지세 납부대상 내역" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => handleClick(4)}>
          <ListItemIcon>
            <ConfirmationNumberOutlinedIcon />
          </ListItemIcon>
          <ListItemText className="lnbTitle" primary="쿠폰 관리" />
          {open[4] ? (
            <ExpandLess fontSize="large" />
          ) : (
            <ExpandMore fontSize="large" />
          )}
        </ListItemButton>
        <Collapse in={open[4]} timeout="auto" unmountOnExit>
          <List component="div" className="lnbItem" disablePadding>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="쿠폰 조회" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => handleClick(5)}>
          <ListItemIcon>
            <OutboundOutlinedIcon />
          </ListItemIcon>
          <ListItemText className="lnbTitle" primary="발행/발송 관리" />
          {open[5] ? (
            <ExpandLess fontSize="large" />
          ) : (
            <ExpandMore fontSize="large" />
          )}
        </ListItemButton>
        <Collapse in={open[5]} timeout="auto" unmountOnExit>
          <List component="div" className="lnbItem" disablePadding>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="프리픽스" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="발송 템플릿" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="인지세 필증번호" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => handleClick(6)}>
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText className="lnbTitle" primary="시스템 관리" />
          {open[6] ? (
            <ExpandLess fontSize="large" />
          ) : (
            <ExpandMore fontSize="large" />
          )}
        </ListItemButton>
        <Collapse in={open[6]} timeout="auto" unmountOnExit>
          <List component="div" className="lnbItem" disablePadding>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="운영자" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="권한" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="메뉴" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="판매 정책" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="API 사용권한" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="API 그룹" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="공지사항" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="감사기록관리" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9, py: 0 }}>
              <ListItemText primary="공통코드관리" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default LnbTest;
