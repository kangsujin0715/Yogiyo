import React from 'react'
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ProductInner from './ProductInner'




function MainProductList() {
  return (
    <List sx={{ width: '100%', padding: '0', }}>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/img/Thumbnail.png' pName='1만원권' pPrice='10,000원' pBrand='요기요'></ProductInner>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/img/Thumbnail-1.png' pName='1만오천원권' pPrice='15,000원' pRate='20%' pBrand='요기요'></ProductInner>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/img/Thumbnail-2.png' pName='1만원권' pPrice='10,000원' pBrand='요기요'></ProductInner>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/img/Thumbnail-3.png' pName='1만원권' pPrice='10,000원' pBrand='요기요'></ProductInner>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/img/Thumbnail-4.png' pName='1만원권' pPrice='10,000원' pBrand='요기요'></ProductInner>
        </ListItem>
    </List>
  )
}

export default MainProductList

