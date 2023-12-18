import React from 'react'
import '../css/btn-all.css'

function BtnAllView({listUrl}) {
  return (
    <div className='all-view'>
      <a href={listUrl} >
        <img src='/images/ic_chevron_right_filled.png' alt='' />
        <p>전체보기</p>
      </a>
    </div>
  )
}

export default BtnAllView