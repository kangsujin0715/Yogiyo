import React from 'react';
import '../css/giftHeader.css'

function GiftHeader() {
  return (
    <div className='gift-header'>
      <button className="btn_prev"></button>
        <h1 className="title">선물하기</h1>
        <button className="btn_gift"></button>
    </div>
  );
}

export default GiftHeader;
