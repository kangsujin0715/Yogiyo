import React, { useState } from 'react';
import LottieIcon from './LottieIcon';
import '../css/cateslide.css'

function CategorySlide() {
  const iconList=[
    {icon:require("../lottieData/all_lottie_42_42.json"), cateName:'전체'},
    {icon:require("../lottieData/yogigy_42_42.json"), cateName:'요기요'},
    {icon:require("../lottieData/chicken_lottie_42_42.json"), cateName:'치킨'},
    {icon:require("../lottieData/burger_lottie_42_42.json"), cateName:'햄버거'},
    {icon:require("../lottieData/hansik_lottie_42_42.json"), cateName:'한식'},
    {icon:require("../lottieData/donkatsu_lottie_42_42.json"), cateName:'돈가스'},
    {icon:require("../lottieData/jokbal_lottie_42_42.json"), cateName:'족발/보쌈'},
    {icon:require("../lottieData/chineses_lottie_42_42.json"), cateName:'중식'},
    {icon:require("../lottieData/boonsik_lottie_42_42.json"), cateName:'분식'},
    {icon:require("../lottieData/asian_lottie_42_42.json"), cateName:'아시안'},
    {icon:require("../lottieData/pizza_lottie_42_42.json"), cateName:'피자'},
    {icon:require("../lottieData/dessert_lottie_42_42.json"), cateName:'카페/디저트'},
    {icon:require("../lottieData/salad_lottie_42_42.json"), cateName:'샐러드'},
    {icon:require("../lottieData/dosirak_lottie_42_42.json"), cateName:'죽/도시락'},
    {icon:require("../lottieData/tang_lottie_42_42.json"), cateName:'찜/탕'},
    {icon:require("../lottieData/meat_lottie_42_42.json"), cateName:'고기/구이'},
    {icon:require("../lottieData/sushi_lottie_42_42.json"), cateName:'회/초밥'},
    {icon:require("../lottieData/sandwitch_lottie_42_42.json"), cateName:'샌드위치'},
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