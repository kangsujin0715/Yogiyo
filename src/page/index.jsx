import { Box, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import { pageList } from '../App';
import { Link } from 'react-router-dom';
import '../include/css/common.css';

function Index() {
  return (
    <Box>
      <Typography variant="h3">요기요 선물하기</Typography>
      <List>
        {pageList.map(({ title, path }) => (
          <ListItem key={path}>
            <Link to={path}>{title}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Index;
