import React from 'react'
import ImgsCard from '../Component/ImgsCard'
import '../css/cardGrid.css'

function CardGrid() {
  return (
    <div className='card-grid'>
        <ul>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg01.png'/>
            </li>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg02.png'/>
            </li>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg03.png'/>
            </li>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg04.png'/>
            </li>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg05.png'/>
            </li>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg06.png'/>
            </li>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg01.png'/>
            </li>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg02.png'/>
            </li>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg03.png'/>
            </li>
            <li>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg04.png'/>
            </li>
        </ul>
    </div>
  )
}

export default CardGrid