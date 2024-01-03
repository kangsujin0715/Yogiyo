import React from 'react'
import CategoryIcon from './CategoryIcon'
import '../css/cateslide.css'

function CategorySlide() {
  return (
    <div className='category-selecter'>
        <div className='cate-slide horizontal-scroll'>
            <ul>
                <li>
                    <CategoryIcon  active='cate-icon active' cateIcon='/images/food_category/all.svg' cateName='전체'/>
                </li>
                <li>
                    <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/YGY.svg' cateName='요기요'/>
                </li> 
                <li>
                    <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/chicken.svg' cateName='치킨'/>
                </li> 
                <li>
                    <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/hamb.svg' cateName='햄버거'/>
                </li> 
                <li>
                    <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/k-food.svg' cateName='한식'/>
                </li>
                <li>
                    <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/dongatu.svg' cateName='돈가스'/>
                </li> 
                <li>
                    <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/jokbal.svg' cateName='족발/보쌈'/>
                </li>
                <li>
                    <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/china.svg' cateName='중식'/>
                </li> 
                <li>
                    <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/bunsik.svg' cateName='분식'/>
                </li> 
                <li>
                    <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/asian.svg' cateName='아시안'/>
                </li> 
                <li>
                    <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/pizza.svg' cateName='피자'/>
                </li> 
                <li>
                    <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/cafe.svg' cateName='카페/디저트'/>
                </li> 
                <li>
                    <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/salad.svg' cateName='샐러드'/>
                </li>
                <li>
                    <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/juk.svg' cateName='도시락'/>
                </li> 
                <li>
                    <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/galbitang.svg' cateName='찜/탕'/>
                </li>
                <li>
                    <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/meat.svg' cateName='고기/구이'/>
                </li> 
                <li>
                    <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/sushi.svg' cateName='회/초밥'/>
                </li> 
                <li>
                    <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/sandwich.svg' cateName='샌드위치'/>
                </li>
            </ul>
        </div>
        <div className='dimmed'></div>
    </div>
  )
}

export default CategorySlide