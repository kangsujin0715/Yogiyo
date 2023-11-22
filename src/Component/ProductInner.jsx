import React from 'react'
import RabalRecommend from './RabalRecommend'
import '../include/css/productinner.css'
import '../include/css/reset.css'

function ProductInner({imgUrl, pName, pPrice, pRate, pBrand}) {
  return (
    <div className='product-inner'>
        <div className='thumbnail-img'>
            <img src={imgUrl} alt=''/>
        </div>
        <div className='product-explan'>
            <div className='product-name'>
                <span>{pName}</span><RabalRecommend />
            </div>
            <div className='product-price'>
                <span className='discount-rate'>{pRate} </span>
                <span>{pPrice}</span>
            </div>
            <div className='brand-name'>{pBrand}</div>
        </div>
    </div>
  )
}

ProductInner.defaultProps = {
    imgUrl: '/img/pThumbnail.png',
    pName:'상품명',
    pPrice:'상품가격',
    pBrand:'요기요'

}
export default ProductInner