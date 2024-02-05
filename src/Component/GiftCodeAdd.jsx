import React from 'react'
import '../css/giftCodeAdd.css'

function GiftCodeAdd({state, inactive}) {
  return (
    <div id='gift-code-area' className={state}>
         <h2>상품권 번호 등록</h2>
         <div className='textfild-area'>
            <span>
              <input type='text' placeholder='상품권 번호 입력' disabled = {inactive}/>
            </span>
            <span>
              <button disabled = {inactive}>등록</button>
            </span>
         </div>
         <p className='count-text'>05:00</p>
    </div>
  )
}

export default GiftCodeAdd