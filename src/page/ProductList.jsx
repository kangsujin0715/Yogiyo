import React from 'react'
import '../include/css/reset.css';
import CategoryList from '../Component/CategoryList'
import CategorySlide from '../Component/CategorySlide'
import FilterBtnGroup from '../Component/FilterBtnGroup'


function ProductList() {
  return (
    <div className='product-AllView'>
      <CategorySlide />
      <FilterBtnGroup />
      <CategoryList />
    </div>
  )
}

export default ProductList