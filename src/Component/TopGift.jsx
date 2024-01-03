import React from 'react'
import MoreTitle from '../Component/MoreTitle'
import MainProductList from '../Component/MainProductList'

function TopGift() {
  return (
    <div className='popular-gift'>
        <MoreTitle btnMore='btn-on' titleText='지금 가장 인기있는 선물'/>
        <MainProductList />
    </div>
  )
}

export default TopGift