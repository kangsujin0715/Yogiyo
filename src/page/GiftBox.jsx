import React from 'react'
import GiftCodeAdd from '../Component/GiftCodeAdd'
import GiftBoxTap from '../Component/GiftBoxTap'
import GiftBoxList from '../Component/GiftBoxList'

export default function GiftBox() {
    return (
      <div className='gift-box'>
        <GiftCodeAdd />
        <GiftBoxTap active_01='active' />
        <GiftBoxList />
      </div>
    )
  }
