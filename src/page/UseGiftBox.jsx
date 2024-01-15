import React from 'react'
import GiftcheckBox from '../Component/GiftCheckBox'
import GiftcheckBoxDisabled from '../Component/GiftCheckBoxDisabled'
import BtnFButton from '../Component/BtnFButton'
import '../css/use-giftbox.css'

export default function UseGiftBox() {
  return (
    <div className='use-giftbox'>
        <ul>
            <li>
                <GiftcheckBox status='' labelName='a01'/>
            </li>
            <li>
                <GiftcheckBox status='' labelName='a02' counter='5'/>
            </li>
            <li>
                <GiftcheckBox status='' labelName='a05' counter='4'/>
            </li>
            <li>
                <GiftcheckBox status='' labelName='a06' counter='3'/>
            </li>
            <li>
                <GiftcheckBoxDisabled labelName='a03'/>
            </li>
            <li>
                <GiftcheckBoxDisabled status='not' labelName='a04' noticetext='프랭크버거에서 주문 시 사용 가능해요'/>
            </li>
        </ul>
        <BtnFButton btnText='0원 사용하기' />
    </div>
  )
}
