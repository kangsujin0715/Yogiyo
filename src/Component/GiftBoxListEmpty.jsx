import React from 'react'
import '../css/gift-empty.css'

function GiftBoxListEmpty({emptyText}) {
  return (
    <div className='gift-empty'>
        <img src='/images/EmptyImg.png' alt='' />
        <p>{emptyText}</p>
    </div>
  )
}

export default GiftBoxListEmpty