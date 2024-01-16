import React from 'react'
import '../css/giftbox-btn.css'
function GiftBoxBtn({size}) {
  return (
    <div className='giftbox-btn'>
        <button className={size}>선물하러가기</button>
    </div>
  )
}

export default GiftBoxBtn