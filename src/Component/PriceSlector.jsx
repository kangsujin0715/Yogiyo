import React from 'react'
import '../css/card-cate.css'

function PriceSlector() {
  return (
    <div className='card-cate horizontal-scroll'>
        <ul>
            <li className='active'>1만원미만</li>
            <li>1만원대</li>
            <li>2만원대</li>
            <li>3만원대</li>
            <li>5만원대</li>
            <li>10만원대</li>
        </ul>
    </div>
  )
}

export default PriceSlector