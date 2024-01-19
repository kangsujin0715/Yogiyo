import React from 'react'
import MoreTitle from '../Component/MoreTitle'
import MainProductListTop5 from './MainProductListTop5'

function TopGift() {
  return (
    <div className='popular-gift'>
        <MoreTitle btnMore='btn-on' titleText='지금 가장 인기있는 선물'/>
        <MainProductListTop5 />
    </div>
  )
}

export default TopGift