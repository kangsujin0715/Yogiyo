import React from 'react'
import '../css/cateIcon.css'
import Animation from './LottieIcon'

function CategoryIcon({active, cateIcon, cateName}) {
  return (
    <button className= {active}>
        <div className='icon-box'>
            <Animation />
        </div>
        <p>{cateName}</p>
    </button>
  ) 
}


export default CategoryIcon