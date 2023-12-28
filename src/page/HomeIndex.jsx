import React from 'react'
import KeyVisual from '../Component/KeyVisual';
import GiftCardSlide from '../Component/GiftCardSlide';
import BrandSlide from '../Component/BrandSlide';
import CardImages from '../Component/CardImages';
import TopGift from '../Component/TopGift'
import PriceCate from '../Component/PriceCate'
import SaleGift from '../Component/SaleGift'
import MainBottomButton from '../Component/MainBottomButton'
import '../css/home.css'

export default function HomeIndex() {
  return (
    <div className='giftHome'>
      
      <KeyVisual />
      <GiftCardSlide />
      <BrandSlide />
      <CardImages />
      <TopGift />
      <PriceCate />
      <SaleGift />
      <MainBottomButton />
    </div>
  )
}
