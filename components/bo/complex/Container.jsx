import React from 'react';

import '../../../asset/bo/component-css/container.css';
import '../../../asset/bo/component-css/common.css';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Container = () => {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 1,
        p: 3,
        mb: 5,
		maxWidth: 1120,
      }}>
      <Box className="search-box">
        <Box className="item-box">
          <div className="item">
            <h6>사업자코드</h6>
            <FormControl sx={{ width: '100%' }} size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="item">
            <h6>사업자명</h6>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              defaultValue="전체"
              sx={{ width: '100%' }}
            />
          </div>
          <div className="item">
            <h6>사업자 등록번호</h6>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              defaultValue="전체"
              sx={{ width: '100%' }}
            />
          </div>
          <div className="item">
            <h6>사용여부</h6>
            <FormControl sx={{ width: '100%' }} size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>
        <Box className="item-box">
          <div className="item">
            <h6>사업자코드</h6>
            <LocalizationProvider sx={{ pt: 0 }} dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker className="date" sx={{ width: '100%' }} />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </Box>
      </Box>
      <Box className="btn-center-box" sx={{ '& button': { m: 1, mt: 0, mb: 0 } }}>
        <Button variant="outlined">초기화</Button>
        <Button variant="contained">저장</Button>
      </Box>
    </Box>
  );
};

export default Container;
