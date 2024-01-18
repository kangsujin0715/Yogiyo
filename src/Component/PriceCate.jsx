import React from 'react'
import MoreTitle from '../Component/MoreTitle'
import PriceSlector from '../Component/PriceSlector'
import PriceCardSlide from '../Component/PriceCardSlide'

function PriceCate() {
  return (
    <div className='price-pik'>
        <MoreTitle btnMore='btn-off' titleText='가격대별로 골라보세요'/>
        <div>
          <PriceSlector />
          <PriceCardSlide />
        </div> 
    </div>
  )
}

export default PriceCate