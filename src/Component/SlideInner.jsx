import React from 'react'
import '../css/slideinner.css'




function SlideInner({imgUrl, firstText, lastText, linkUrl}) {
  return (
    <div className='slide-inner'>
      <img src= {imgUrl} alt='' />
      <div className='slidertext'>
        <p>{firstText}</p>
        <p>{lastText}</p>
        <a href= {linkUrl}>자세히 보기</a>
      </div>
    </div>
  )
}


SlideInner.defaultProps = {
    imgUrl: '/images/keyimg_01.png',
    firstText:"요기요 선물하기로",
    lastText:"마음을 전하세요!",
    linkUrl: '#'
}

export default SlideInner