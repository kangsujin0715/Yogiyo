import React from 'react'
import ImgsCard from './ImgsCard'
import BtnAllView from './BtnAllView'
import '../css/imgslide.css'

function ImgSlide() {
  return (
    <div className='imgslide-area horizontal-scroll'>
        <ul>
            <li>
                <>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg01.png'></ImgsCard>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg02.png'></ImgsCard>
                </>
            </li>
            <li>
                <>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg03.png'></ImgsCard>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg04.png'></ImgsCard>
                </>
            </li>
            <li>
                <>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg05.png'></ImgsCard>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg06.png'></ImgsCard>
                </>
            </li>
            <li>
                <>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg07.png'></ImgsCard>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg08.png'></ImgsCard>
                </>
            </li>
            <li>
                <>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg09.png'></ImgsCard>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg10.png'></ImgsCard>
                </>
            </li>
            <li>
                <>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg11.png'></ImgsCard>
                <ImgsCard imgUrl='/images/gift-card/gift-img_lg12.png'></ImgsCard>
                </>
            </li>
            <li>
                <>
                <ImgsCard></ImgsCard>
                <ImgsCard></ImgsCard>
                </>
            </li>
            <li>
                <>
                <ImgsCard></ImgsCard>
                <ImgsCard></ImgsCard>
                </>
            </li>
            <li>
                <>
                <ImgsCard></ImgsCard>
                <ImgsCard></ImgsCard>
                </>
            </li>
            <li>
                <>
                <ImgsCard></ImgsCard>
                <ImgsCard></ImgsCard>
                </>
            </li>
            <li>
                <BtnAllView listUrl='#'/>
            </li>
        </ul>
    </div>
  )
}

export default ImgSlide