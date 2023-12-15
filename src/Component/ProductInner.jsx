import React from 'react'
import RabalRecommend from './RabalRecommend'
import '../include/css/productinner.css'
import '../include/css/reset.css'

function ProductInner({imgUrl, name, price, rate, brand}) {
  return (
    <div className='product-inner'>
        <div className='thumbnail-img'>
            <img src={imgUrl} alt=''/>
        </div>
        <div className='product-explan'>
            <div className='product-name'>
                <span>{name}</span><RabalRecommend />
            </div>
            <div className='product-price'>
                <span className='discount-rate'>{rate} </span>
                <span>{price}</span>
            </div>
            <div className='brand-name'>{brand}</div>
        </div>
    </div>
  )
}

ProductInner.defaultProps = {
    imgUrl: '/img/pThumbnail.png',
    name:'상품명',
    price:'상품가격',
    brand:'요기요'

}
export default ProductInner