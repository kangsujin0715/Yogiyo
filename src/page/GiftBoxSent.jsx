import React from 'react'
import GiftCodeAdd from '../Component/GiftCodeAdd'
import GiftBoxTap from '../Component/GiftBoxTap'
import GiftBoxSentList from '../Component/GiftBoxSentList'
import GiftBoxBtn from '../Component/GiftBoxBtn'
export default function GiftBox() {
    return (
      <div className='gift-box'>
        <GiftCodeAdd />
        <GiftBoxTap active_02='active' />
        <GiftBoxSentList />
        <GiftBoxBtn />
      </div>
    )
  }
