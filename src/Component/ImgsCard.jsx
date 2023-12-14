import React from 'react'
import '../css/imgcard.css'

function ImgsCard({imgUrl, linkUrl}) {
  return (
    <a href={linkUrl} className='img-box'>
        <img src={imgUrl} alt='' />
    </a>
  )
}

ImgsCard.defaultProps = { 
    imgUrl:'/images/gift-card/gift-img_lg00.png',
    linkUrl: '#'
}

export default ImgsCard