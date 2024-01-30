import * as React from 'react';
import {Box, Typography, Tab, Tabs} from '@mui/material';

import PropTypes from 'prop-types';

import '../css/tab.css';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Privacy() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box className='tab-box' sx={{ borderBottom: 1, borderColor: 'divider', padding: '0 12px' }}>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
          <Tab label='이용안내' {...a11yProps(0)} />
          <Tab label='상품정보' {...a11yProps(1)} />
          <Tab label='개인정보' {...a11yProps(2)} />
          <Tab label='탭 아이템' {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        이용안내
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        상품정보
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        개인정보
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
	  	탭 아이템
      </CustomTabPanel>
    </Box>
  );
}