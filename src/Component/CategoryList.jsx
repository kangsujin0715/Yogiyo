import React from 'react'
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import '../include/css/reset.css';
import ProductInner from './ProductInner'




function CategoryList() {
  return (
    <List sx={{ width: '100%', }}>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/img/Thumbnail.png' name='1만원권' price='10,000원' brand='요기요' badge='active'></ProductInner>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/img/Thumbnail-1.png' name='1만오천원권' price='15,000원' rate='20%' brand='요기요' badge='active'></ProductInner>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/img/Thumbnail-2.png' name='1만원권' price='10,000원' brand='요기요' badge='active'></ProductInner>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/img/Thumbnail-3.png' name='1만원권' price='10,000원' brand='요기요'></ProductInner>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/img/Thumbnail-4.png' name='1만원권' price='10,000원' brand='요기요'></ProductInner>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/img/Thumbnail-5.png' name='1만원권' price='10,000원' brand='요기요'></ProductInner>
        </ListItem>
    </List>
  )
}

export default CategoryList

