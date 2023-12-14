import React from 'react'
import MoreTitle from '../Component/MoreTitle'
import MainProductList from '../Component/MainProductList'

function SaleGift() {
  return (
    <>
        <MoreTitle btnMore='btn-on' titleText='할인된 선물만 모아보세요'/>
        <MainProductList />
    </>
  )
}

export default SaleGift