import React from 'react'
import PriceCard from '../Component/PriceCard'
import BtnAllView from './BtnAllView'
import '../css/priceslide.css'


function PriceCardSlide() {
  return (
    <>
    <div className='p-card-slide horizontal-scroll'>
        <ul>
            <li>
                <PriceCard linkUrl='#1'imgUrl='/images/gift-card/listitem_01.png' ciUrl='/images/brand/brand-01.png' brand='도미노피자' name='1만오천원권' rate='10%' price='12,000원' />
            </li>
            <li>
                <PriceCard imgUrl='/images/gift-card/listitem_02.png' ciUrl='/images/brand/brand-02.png'/>
            </li>
            <li>
                <PriceCard imgUrl='/images/gift-card/listitem_03.png' ciUrl='/images/brand/brand-03.png'/>
            </li>
            <li>
                <PriceCard imgUrl='/images/gift-card/listitem_02.png' ciUrl='/images/brand/brand-04.png'/>
            </li>
            <li>
                <PriceCard imgUrl='/images/gift-card/listitem_02.png' ciUrl='/images/brand/brand-05.png'/>
            </li>
            <li>
                <PriceCard imgUrl='/images/gift-card/listitem_02.png' ciUrl='/images/brand/brand-01.png'/>
            </li>
            <li>
                <PriceCard linkUrl='#1'imgUrl='/images/gift-card/listitem_01.png' ciUrl='/images/ brand/brand-02.png'/>
            </li>
            <li>
                <PriceCard imgUrl='/images/gift-card/listitem_02.png' ciUrl='/images/brand/brand-03.png'/>
            </li>
            <li>
                <PriceCard imgUrl='/images/gift-card/listitem_03.png' ciUrl='/images/brand/brand-04.png'/>
            </li>
            <li>
                <PriceCard imgUrl='/images/gift-card/listitem_02.png' ciUrl='/images/brand/brand-05.png'/>
            </li>
            <li>
                <PriceCard imgUrl='/images/gift-card/listitem_02.png' ciUrl='/images/brand/brand-01.png'/>
            </li>
            <li>
                <BtnAllView listUrl='#'/>
            </li>
        </ul>
    </div>
    </>
  )
}

export default PriceCardSlide