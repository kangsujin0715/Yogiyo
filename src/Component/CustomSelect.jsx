import React, { useState } from 'react';
import {
  Box,
  Drawer,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  styled,
} from '@mui/material';

import '../include/css/categoryfilter.css';

const FtIcon = styled('span')({
  borderRadius: '50%',
  width: 24,
  height: 24,
  backgroundColor: '#ffffff',
});

const FtCheckedIcon = styled(FtIcon)({
  width: 24,
  height: 24,
  backgroundImage: 'url(/img/ic_check_s.svg)',
  fontWeight: 'bold',
});

function FtRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<FtCheckedIcon />}
      icon={<FtIcon />}
      {...props}
    />
  );
}

function CategoryFilter({ options, onSelect, pSelectTitle }) {
  const [selectedOption, setSelectedOption] = useState(options[0]?.label || '');
  
  const handleSelect = (value, label) => {
    setSelectedOption(label);
    onSelect(value);
  };

  const [state, setState] = useState({ bottom: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className="filter-box"
      sx={{ width: anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <FormControl className="in-filter">
        <FormLabel id="filter-radio-buttons-group" className="title-label">
          {pSelectTitle}
        </FormLabel>
        <RadioGroup
          aria-labelledby="filter-radio-buttons-group"
          name="brand-filter-radio-buttons-group"
          value={selectedOption}
          onChange={handleChange}
        >
          {options.map((option) => (
            <FormControlLabel key={option.value} label={option.label} value={option.value} control={<FtRadio />} labelPlacement="start" className="right-labal" onClick={() => handleSelect(option.value, option.label)}/>
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Box className="select-box" onClick={toggleDrawer(anchor, true)}>
            { selectedOption || pSelectTitle }
          </Box>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            { list(anchor) }
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}

export default CategoryFilter;
