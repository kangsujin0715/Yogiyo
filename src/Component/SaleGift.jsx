import React from 'react'
import MoreTitle from '../Component/MoreTitle'
import MainProductList from '../Component/MainProductList'

function SaleGift() {
  return (
    <div className='sale-gift'>
        <MoreTitle btnMore='btn-on' titleText='할인된 선물만 모아보세요'/>
        <MainProductList />
    </div>
  )
}

export default SaleGift