import React from 'react'
import '../css/cateIcon.css'

function CategoryIcon({active, cateIcon, cateName}) {
  return (
    <button className= {active}>
        <div className='icon-box'>
            <img src={cateIcon} alt='' />
        </div>
        <p>{cateName}</p>
    </button>
  ) 
}


export default CategoryIcon