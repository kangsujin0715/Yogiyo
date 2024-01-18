import React from 'react';
import Lottie from 'react-lottie';
import '../css/cateIcon.css'


function LottieIcon({ data, stop, onClick, cateName }) {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: data,
    style: { width: '42px' },
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <li onClick={onClick} className='cate-icon'>
      <div className='icon-box'>
        <Lottie options={defaultOptions} isStopped={stop} />
      </div>
      <p className={!stop?'active':""}>{cateName}</p>
    </li>
  );
}

export default LottieIcon;




  

