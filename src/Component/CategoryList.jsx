import React from 'react'
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ProductInner from './ProductInner'




function CategoryList() {
  return (
    <List sx={{ width: '100%', }}>
        <ListItem alignItems="flex-start">
          <ProductInner name='1만원권' price='10,000원' brand='요기요' badge='active'></ProductInner>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/images/brand/brand-02.png' name='1만오천원권' price='15,000원' rate='20%' brand='동대문엽기떡볶기' badge='active'></ProductInner>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/images/brand/brand-03.png' name='1만원권' price='10,000원' brand='빕스' badge='active'></ProductInner>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/images/brand/brand-04.png' name='1만원권' price='10,000원' brand='버거킹'></ProductInner>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/images/brand/brand-05.png' name='1만원권' price='10,000원' brand='두찜'></ProductInner>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/images/brand/brand-01.png' name='1만원권' price='10,000원' brand='네네치킨'></ProductInner>
        </ListItem>
    </List>
  )
}

export default CategoryList

