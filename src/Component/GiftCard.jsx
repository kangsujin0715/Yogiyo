import React from 'react'
import '../css/gift-card-sm.css'

function GiftCard({linkUrl, imgUrl}) {
  return (
    <div className='giftcard-sm'>
        <a href={linkUrl}> <img src={imgUrl} alt="" /></a>
    </div>
  )
} 

GiftCard.defaultProps = {
    linkUrl: '#',
    imgUrl: '/images/gift-card-sm/card_10.png',
    
}

export default GiftCard 