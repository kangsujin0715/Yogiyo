import React from 'react';

import '../../../asset/bo/component-css/header.css';
import Button from '@mui/material/Button';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header style={{ backgroundColor: '#fff' }}>
    <div className="storybook-header">
      <div>
        <h1><a href="#"></a></h1>
      </div>
      <div>
        {user ? (
          <>
            {/* <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span> */}
            <Button size="small" variant="text" >운영매뉴얼</Button>
            <Button size="small" variant="text" >YOGIYO(요기요)</Button>
            <Button size="small" variant="text" onClick={onLogout}>로그아웃</Button>
          </>
        ) : (
          <>
            <Button variant="text" endIcon={<Send />}>
              로그인
            </Button>
          </>
        )}
      </div>
    </div>
  </header>
);
