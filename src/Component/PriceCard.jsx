import React from 'react'
import '../css/priceCard.css'

function PriceCard({linkUrl, imgUrl, ciUrl, name, rate, price, brand}) {
  return (
    <a href={linkUrl}  className='price_card'> 
        <div className='priceCard-img'>
            <img src={imgUrl} alt= '' />
            <span className='brand-ci'>
                <img src={ciUrl} alt='' />
            </span>
        </div>
        <div className='product-explan2'>
            <p className='brand-name'>{brand}</p>
            <p className='product-name'>{name}</p>
            <div className='product-price'>
                <span className='discount-rate'>{rate} </span>
                <span>{price}</span>
                <i></i>
            </div>
            
        </div>

    </a>
  )
} 

PriceCard.defaultProps = {
    linkUrl: '#',
    imgUrl: '/images//gift-card/listitem_01.png',
    ciUrl: '/images/brand/ci_02.png',
    name:'상품명',
    price:'상품가격',
    brand:'요기요'
    
}

export default PriceCard 