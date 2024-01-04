import React from 'react'
import ImgsCard from '../Component/ImgsCard'
import '../css/cardGrid.css'

function CardGrid() {
  return (
    <div className='card-grid'>
        <ul>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg01.png'></ImgsCard>
            </li>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg02.png'></ImgsCard>
            </li>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg03.png'></ImgsCard>
            </li>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg04.png'></ImgsCard>
            </li>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg05.png'></ImgsCard>
            </li>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg06.png'></ImgsCard>
            </li>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg01.png'></ImgsCard>
            </li>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg02.png'></ImgsCard>
            </li>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg03.png'></ImgsCard>
            </li>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg04.png'></ImgsCard>
            </li>
        </ul>
    </div>
  )
}

export default CardGrid