import React from 'react'
import GiftCodeAdd from '../Component/GiftCodeAdd'
import GiftBoxTap from '../Component/GiftBoxTap'
import GiftBoxList from '../Component/GiftBoxList'
import GiftBoxBtn from '../Component/GiftBoxBtn'

export default function GiftBox() {
    return (
      <div className='gift-box'>
        <GiftCodeAdd state='disable' inactive='true'/>
        <GiftBoxTap active_01='active' />
        <GiftBoxList />
        <GiftBoxBtn />
      </div>
    )
  }
