import * as React from 'react';

import { Box, Typography } from '@mui/material';

import PhoneNumber from '../Component/PhoneNumber';
import PhoneNumberBtn from '../Component/PhoneNumberBtn';

import '../css/lineBox.css';
import '../css/checkbox.css';

export default function ToInfo() {
  return (
    <Box className='get-info-box'>
      <Box className="padding-box detail-info-box">
        <Typography variant="h3" className="title">
          확인중 3명
        </Typography>
        <Box className="line-box">
          <Box className="detail-info">
            <PhoneNumberBtn />
          </Box>
        </Box>
      </Box>
	  <Box className="padding-box detail-info-box">
        <Typography variant="h3" className="title">
          확인완료 3명
        </Typography>
        <Box className="line-box">
          <Box className="detail-info">
            <PhoneNumber />
          </Box>
        </Box>
      </Box>
	  <Box className="padding-box detail-info-box">
        <Typography variant="h3" className="title">
          선물취소 3명
        </Typography>
        <Box className="line-box">
          <Box className="detail-info">
            <PhoneNumber />
          </Box>
        </Box>
      </Box>
	  <Box className="padding-box detail-info-box">
        <Typography variant="h3" className="title">
          발행 실패 100명
        </Typography>
        <Box className="line-box">
          <Box className="detail-info phone-number-box">
            <PhoneNumber />
          </Box>
		  {/* 버튼 없는 목록 margin 값이 다름 */}
        </Box>
      </Box>
    </Box>
  );
}
