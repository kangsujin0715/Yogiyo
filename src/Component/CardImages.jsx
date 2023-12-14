import React from 'react'
import MoreTitle from './MoreTitle'
import CardCate from './CardCate'
import ImgSlide from './ImgSlide'

function CardImages() {
  return (
    <>
        <MoreTitle btnMore='btn-off' titleText='요기요 상품권에 어울리는 카드는?'/>
        <CardCate></CardCate>
        <ImgSlide></ImgSlide>
        
    </>
  )
}

export default CardImages