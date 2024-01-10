import React from 'react'

function CardRegisterSlide({ imgUrl, brand, num }) {
  return (
    <div className='card-register-inner'>
		<input type="checkbox" id="register" name='register'/>
		<label htmlFor="register" className='flex'>
			<img className='brand-logo' src={imgUrl} alt='카드 브랜드 이미지' />
			{/* {brand} */}
			<span className='card-num'>{num}</span>
		</label>
    </div>
  )
}

CardRegisterSlide.defaultProps = {
    imgUrl: '/images/card-brand.svg',
	brand: '신세계신한카드',
	num: '****1234',
}

export default CardRegisterSlide