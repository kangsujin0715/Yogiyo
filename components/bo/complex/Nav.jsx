import React from 'react';

import '../../../asset/bo/component-css/nav.css';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function Nav() {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" className='nav'>
        <Link underline="hover" color="inherit" href="/">
          시스템 관리
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/">
          목록
        </Link>
        <Typography color="text.primary">목록</Typography>
      </Breadcrumbs>
    </div>
  );
}
