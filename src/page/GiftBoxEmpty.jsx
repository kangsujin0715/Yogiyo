import React from 'react'
import GiftCodeAdd from '../Component/GiftCodeAdd'
import GiftBoxTap from '../Component/GiftBoxTap'
import GiftBoxListEmpty from '../Component/GiftBoxListEmpty.jsx'
import GiftBoxBtn from '../Component/GiftBoxBtn'

export default function GiftBox() {
    return (
      <div className='gift-box'>
        <GiftCodeAdd />
        <GiftBoxTap active_01='active' />
        <GiftBoxListEmpty emptyText='받은 선물이 없어요.'/>
        <GiftBoxBtn size='sm' />
      </div>
    )
  }
