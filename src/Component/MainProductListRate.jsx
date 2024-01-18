import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ProductInner from './ProductInner'




function MainProductListRate() {
  return (
    <List sx={{ width: '100%', padding: '0', }}>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/images/brand/brand-04.png' name='10만원권' price='100,000원' rate='20%' brand='버거킹'></ProductInner>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/images/brand/brand-03.png' name='5만원권' price='50,000원' rate='20%' brand='빕스'></ProductInner>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/images/brand/brand-02.png' name='3만원권' price='30,000원' rate='20%' brand='동대문엽기떡볶이'></ProductInner>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ProductInner imgUrl='/images/brand/brand-01.png' name='1만5천원권' price='15,000원' rate='20%' brand='네네치킨'></ProductInner>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ProductInner name='1만원권' price='10,000원' brand='요기요'></ProductInner>
        </ListItem>
    </List>
  )
}

export default MainProductListRate

