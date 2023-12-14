import React from 'react'
import MoreTitle from '../Component/MoreTitle'
import MainProductList from '../Component/MainProductList'

function TopGift() {
  return (
    <>
        <MoreTitle btnMore='btn-on' titleText='지금 가장 인기있는 선물'/>
        <MainProductList />
    </>
  )
}

export default TopGift