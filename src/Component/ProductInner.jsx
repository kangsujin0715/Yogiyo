import React from 'react'
import '../css/productinner.css'


function ProductInner({imgUrl, name, price, rate, brand, badge}) {
  return (
    <div className='product-inner'>
        <div className='thumbnail-img'>
            <img src={imgUrl} alt=''/>
        </div>
        <div className='product-explan'>
            <div className='brand-name'>{brand}</div>
            <div className='product-name'>
                <span>{name}</span>
            </div>
            <div className='product-price'>
                <span className='discount-rate'>{rate} </span>
                <span>{price}</span>
            </div>
        </div>
        <i className={badge}>추천</i>
    </div>
  )
}

ProductInner.defaultProps = {
    imgUrl: '/images/brand/yogiyo.png',
    name:'상품명',
    price:'상품가격',
    brand:'요기요'

}
export default ProductInner