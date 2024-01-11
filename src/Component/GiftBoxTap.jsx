import React from 'react'
import '../css/giftBox-tap.css'

function GiftBoxTap({active_01, active_02}) {
  return (
    <div className='giftBox-tap'>
        <ul>
            <li className={active_01}>
                <p>받은 선물</p>
                <span></span>
            </li>
            <li className={active_02}>
                <p>보낸 선물</p>
                <span></span>
            </li>
        </ul>
    </div>
  )
}

export default GiftBoxTap