import React from 'react'
import GiftCard from '../Component/GiftCard'
import '../css/cardslide.css'
import MoreTitle from '../Component/MoreTitle'

function GiftCardSlide() {
  return (
    <div className='giftcard-slide'>
        <MoreTitle btnMore='btn-on' titleText='요기요 금액권을 골라보세요'/>
        <div className='card-slide horizontal-scroll'>
            <ul>
                <li>
                    <GiftCard price='10,000원' />
                </li>
                <li>
                    <GiftCard price='15,000원' />
                </li>
                <li>
                    <GiftCard price='20,000원'/>
                </li>
                <li>
                    <GiftCard price='30,000원'/>
                </li>
                <li>
                    <GiftCard price='50,000원'/>
                </li>
                <li>
                    <GiftCard price='100,000원'/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default GiftCardSlide