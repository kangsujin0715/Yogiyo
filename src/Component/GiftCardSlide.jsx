import React from 'react'
import GiftCard from '../Component/GiftCard'
import '../css/cardslide.css'

function GiftCardSlide() {
  return (
    <div className='card-slide horizontal-scroll'>
        <ul>
            <li>
                <GiftCard linkUrl='#1' imgUrl='/images/gift-card-sm/card_10.png'/>
            </li>
            <li>
                <GiftCard imgUrl='/images/gift-card-sm/card_15.png'/>
            </li>
            <li>
                <GiftCard imgUrl='/images/gift-card-sm/card_20.png'/>
            </li>
            <li>
                <GiftCard imgUrl='/images/gift-card-sm/card_30.png'/>
            </li>
            <li>
                <GiftCard imgUrl='/images/gift-card-sm/card_50.png'/>
            </li>
            <li>
                <GiftCard imgUrl='/images/gift-card-sm/card_100.png'/>
            </li>
        </ul>
    </div>
  )
}

export default GiftCardSlide