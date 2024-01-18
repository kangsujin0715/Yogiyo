import React, { useState } from 'react';
import LottieIcon from './LottieIcon';
import all from '../lottieData/all_lottie_42_42.json';
import yogigy from '../lottieData/yogigy_42_42.json';
import chicken from '../lottieData/chicken_lottie_42_42.json';
import burger from '../lottieData/burger_lottie_42_42.json';
import hansik from '../lottieData/hansik_lottie_42_42.json';
import donkatsu from '../lottieData/donkatsu_lottie_42_42.json';
import jokbal from '../lottieData/jokbal_lottie_42_42.json';
import chineses from '../lottieData/chineses_lottie_42_42.json';
import boonsik from '../lottieData/boonsik_lottie_42_42.json';
import asian from '../lottieData/asian_lottie_42_42.json';
import pizza from '../lottieData/pizza_lottie_42_42.json';
import dessert from '../lottieData/dessert_lottie_42_42.json';
import salad from '../lottieData/salad_lottie_42_42.json';
import dosirak from '../lottieData/dosirak_lottie_42_42.json';
import tang from '../lottieData/tang_lottie_42_42.json';
import meat from '../lottieData/meat_lottie_42_42.json';
import sushi from '../lottieData/sushi_lottie_42_42.json';
import sandwitch from '../lottieData/sandwitch_lottie_42_42.json';

import '../css/cateslide.css'

function CategorySlide() {
  const iconList=[
    {icon:all, cateName:'전체'},
    {icon:yogigy, cateName:'요기요'}, 
    {icon:chicken, cateName:'치킨'}, 
    {icon:burger, cateName:'햄버거'}, 
    {icon:hansik, cateName:'한식'}, 
    {icon:donkatsu, cateName:'돈가스'}, 
    {icon:jokbal, cateName:'족발/보쌈'}, 
    {icon:chineses, cateName:'중식'}, 
    {icon:boonsik, cateName:'분식'}, 
    {icon:asian, cateName:'아시안'}, 
    {icon:pizza, cateName:'피자'}, 
    {icon:dessert, cateName:'카페/디저트'}, 
    {icon:salad, cateName:'샐러드'}, 
    {icon:dosirak, cateName:'죽/도시락'}, 
    {icon:tang, cateName:'찜/탕'}, 
    {icon:meat, cateName:'고기/구이'}, 
    {icon:sushi, cateName:'회/초밥'}, 
    {icon:sandwitch, cateName:'샌드위치'}, 
  ]  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  return (
    <div className='category-selecter'>
        <div className='cate-slide horizontal-scroll'>
            <ul>
                {iconList.map((data, index) => (
                    <LottieIcon
                        key={index}
                        stop={currentIndex !== index}
                        onClick={() => setCurrentIndex(index)}
                        data={data.icon}
                        cateName={data.cateName}
                    />
                ))}
                
            </ul>
        </div>
        <div className='dimmed'></div>
    </div>
  );
}

export default CategorySlide;







// import React from 'react'
// import CategoryIcon from './CategoryIcon'
// import '../css/cateslide.css'

// function CategorySlide() {
//   return (
//     <div className='category-selecter'>
//         <div className='cate-slide horizontal-scroll'>
//             <ul>
//                 <li>
//                     <CategoryIcon  active='cate-icon'  cateName='전체'/>
//                 </li>
//                 <li>
//                     <CategoryIcon  active='cate-icon'  cateName='요기요'/>
//                 </li> 
//                 <li>
//                     <CategoryIcon  active='cate-icon' cateName='치킨'/>
//                 </li> 
//                 <li>
//                     <CategoryIcon  active='cate-icon' cateName='햄버거'/>
//                 </li> 
//                 <li>
//                     <CategoryIcon  active='cate-icon'  cateName='한식'/>
//                 </li>
//                 <li>
//                     <CategoryIcon  active='cate-icon' cateName='돈가스'/>
//                 </li> 
//                 <li>
//                     <CategoryIcon  active='cate-icon' cateName='족발/보쌈'/>
//                 </li>
//                 <li>
//                     <CategoryIcon  active='cate-icon' cateName='중식'/>
//                 </li> 
//                 <li>
//                     <CategoryIcon  active='cate-icon' cateName='분식'/>
//                 </li> 
//                 <li>
//                     <CategoryIcon  active='cate-icon' cateName='아시안'/>
//                 </li> 
//                 <li>
//                     <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/pizza.svg' cateName='피자'/>
//                 </li> 
//                 <li>
//                     <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/cafe.svg' cateName='카페/디저트'/>
//                 </li> 
//                 <li>
//                     <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/salad.svg' cateName='샐러드'/>
//                 </li>
//                 <li>
//                     <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/juk.svg' cateName='도시락'/>
//                 </li> 
//                 <li>
//                     <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/galbitang.svg' cateName='찜/탕'/>
//                 </li>
//                 <li>
//                     <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/meat.svg' cateName='고기/구이'/>
//                 </li> 
//                 <li>
//                     <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/sushi.svg' cateName='회/초밥'/>
//                 </li> 
//                 <li>
//                     <CategoryIcon  active='cate-icon' cateIcon='/images/food_category/sandwich.svg' cateName='샌드위치'/>
//                 </li>
//             </ul>
//         </div>
//         <div className='dimmed'></div>
//     </div>
//   )
// }

// export default CategorySlide