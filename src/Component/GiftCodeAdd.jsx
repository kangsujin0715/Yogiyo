import React from 'react'
import '../css/giftCodeAdd.css'

function GiftCodeAdd() {
  return (
    <div className='gift-code-area'>
         <h2>상품권 번호 등록</h2>
         <div className='textfild-area'>
            <span>
              <input type='number' placeholder='상품권 번호 입력'/>
            </span>
            <span>
              <button>등록</button>
            </span>
         </div>
    </div>
  )
}

export default GiftCodeAdd