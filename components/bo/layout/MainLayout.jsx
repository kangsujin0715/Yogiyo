import { Box } from '@mui/material';
import React from 'react';

import '../../../asset/bo/component-css/mainLayout.css';
import '../../../asset/bo/component-css/common.css';
import '../../../asset/bo/component-css/container.css';
import Hader from '../complex/Header';
import Container from '../complex/Container';
import Lnb from '../complex/Lnb';
import Nav from '../complex/Nav';
import BasicTable from '../complex/BasicTable';
import Button from '@mui/material/Button';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import AddIcon from '@mui/icons-material/Add';

export default function MainLayout(props) {
  return (
    <>
      <Hader />
      <Box className="flex-box">
        <Box component="aside" className="lnb-container">
          <Lnb />
        </Box>
        <Box className="main-container">
          <Box component="nav" className="nav-container">
            <Nav />
          </Box>
          <Box component="main" className="main">
            <Container />
            <Box className="control-box">
              <h6>
                검색결과 <span className="num">999</span>건
              </h6>
              <Box className="btn-end-box" sx={{ '& button': { m: 1, mt: 0, mb: 0 } }}>
                <Button variant="outlined" startIcon={<SaveAltIcon />}>엑셀 다운로드</Button>
                <Button variant="contained" startIcon={<AddIcon />}>등록</Button>
              </Box>
            </Box>
			  <Box>
				<BasicTable></BasicTable>
            {/* {props.children} */}
			</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
