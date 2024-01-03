import React from 'react'
import '../css/gift-card-sm.css'

function GiftCard({price}) {
  return (
    <button className='giftcard-sm'> 
      <span>{price}</span>
    </button>
    
  )
} 

GiftCard.defaultProps = {
    price: '10,000원',
}

export default GiftCard 