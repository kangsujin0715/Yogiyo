import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import '../include/css/reset.css';
import '../include/css/categoryfilter.css';


const FtIcon = styled('span')(({
    borderRadius: '50%',
    width: 24,
    height: 24,
    backgroundColor: '#ffffff',
}));
  
const FtCheckedIcon = styled(FtIcon)({
    width: 24,
    height: 24,
    backgroundImage: 'url(/img/ic_check_s.svg)',
    fontWeight: 'bold'
    },
);
  
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

function CategoryFilter() {

    /* [S]Bottom Drawer */
    const [state, setState] = React.useState({
        bottom: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box className="filter-box"
          sx={{ width: anchor === 'bottom' ? 'auto' : 250}}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <FormControl className='in-filter'>
                <FormLabel id="filter-radio-buttons-group" className='title-label'>브랜드 선택</FormLabel>
                <RadioGroup
                    aria-labelledby="filter-radio-buttons-group"
                    name="brand-filter-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value="all" control={<FtRadio  />} label="전체" labelPlacement="start" className='right-labal' />
                    <FormControlLabel value="brand01" control={<FtRadio />} label="브랜드1" labelPlacement="start" className='right-labal' />
                    <FormControlLabel value="brand02" control={<FtRadio />} label="브랜드2" labelPlacement="start" className='right-labal' />
                    <FormControlLabel value="brand03" control={<FtRadio />} label="브랜드3" labelPlacement="start" className='right-labal' />
                    <FormControlLabel value="brand04" control={<FtRadio />} label="브랜드4" labelPlacement="start" className='right-labal' />
                    <FormControlLabel value="brand05" control={<FtRadio />} label="브랜드5" labelPlacement="start" className='right-labal' />
                </RadioGroup>
            </FormControl>
        </Box>
      );
      const [value, setValue] = React.useState('all');

      const handleChange = (event) => {
        setValue(event.target.value);
      };
  return (
    <div>
        {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}> 
          <Button onClick={toggleDrawer(anchor, true)}><h2>브랜드선택</h2></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}

export default CategoryFilter

