import * as React from 'react';

import { Box, Typography } from '@mui/material';

function Cancel({ pCancel }) {
  return (
    <Box className="cancel-box">
      <Typography className="cancel-txt" variant="h2" component="h2">
        {pCancel}
      </Typography>
      {/* <span className="cancel-popup">선물을 취소했어요</span> */}
    </Box>
  );
}

Cancel.defaultProps = {
  pCancel: '선물 취소'
};

export default Cancel;
