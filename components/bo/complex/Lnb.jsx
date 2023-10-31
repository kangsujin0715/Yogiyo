import React from 'react';
import { useState } from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LnbData from './LnbData';

import '../../../asset/bo/component-css/Lnb.css';

const Lnb = () => {
  return (
    <List
      className="lnb"
      sx={{ width: '100%', maxWidth: 256 }}
      component="nav"
      aria-labelledby="nested-list-subheader">
      {LnbData.map((a, i) => {
        return <LnbMenu LnbData={LnbData[i]} key={i}></LnbMenu>;
      })}
    </List>
  );
};

function LnbMenu(props) {
  const [open, setOpen] = useState(false);
  const handleClick = (i) => {
    const openClick = { ...open };
    openClick[i] = !openClick[i];
    setOpen(openClick);
  };

  const subLnbData = [...props.LnbData.item];

  return (
    <>
      <ListItemButton onClick={() => handleClick(0)}>
        <ListItemIcon>{props.LnbData.icon}</ListItemIcon>
        <ListItemText className="lnb-title" primary={props.LnbData.title} />
        {open[0] ? (
          <ExpandLess fontSize="large" />
        ) : (
          <ExpandMore fontSize="large" />
        )}
      </ListItemButton>
      <Collapse in={open[0]} timeout="auto" unmountOnExit>
        <List component="div" className="lnb-item" disablePadding>
          {subLnbData.map((a, i) => {
            return (
              <ListItemButton key={i} sx={{ pl: 9, py: 0 }}>
                <ListItemText>{subLnbData[i]}</ListItemText>
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}

export default Lnb;
