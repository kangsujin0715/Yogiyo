import React from 'react'
import GiftCardSlide from '../Component/GiftCardSlide';
import KeyVisual from '../Component/KeyVisual';
import BrandSlide from '../Component/BrandSlide';
import CardImages from '../Component/CardImages';
import TopGift from '../Component/TopGift'
import PriceCate from '../Component/PriceCate'
import SaleGift from '../Component/SaleGift'

export default function HomeIndex() {
  return (
    <>
    <KeyVisual></KeyVisual>
    <GiftCardSlide></GiftCardSlide>
    <BrandSlide></BrandSlide>
    <CardImages></CardImages>
    <TopGift></TopGift>
    <PriceCate></PriceCate>
    <SaleGift></SaleGift>
    </>
  )
}
