import React from 'react'
import '../css/brand-logo.css'
function BrandLogo({linkUrl, logoUrl, brandName}) {
  return (
    <a href={linkUrl} className='brand-box'>
        <div className='logo-img'>
            <img src={logoUrl} alt='' />
        </div>
        <p>{brandName}</p>
    </a>
  )
}

export default BrandLogo