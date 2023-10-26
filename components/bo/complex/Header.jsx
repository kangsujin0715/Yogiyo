<<<<<<< HEAD
import React from 'react';

import '../../../asset/bo/component-css/header.css';
import logo from '../../../asset/images/Yogiyo_logo.svg';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <header>
      <h1>
        <a href="javascript:void(0)">
          <img src={logo} alt="요기요 로고" />
        </a>
      </h1>
      <div className="header-menu">
        <Button>운영매뉴얼</Button>
        <Button>YOGIYO(요기요)</Button>
        <Button endIcon={<LogoutIcon />}>로그아웃</Button>
      </div>
    </header>
  );
};

export default Header;
