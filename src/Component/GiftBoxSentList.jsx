import React from 'react'
import GiftContent from '../Component/GiftContent'

import '../css/giftcard-list.css'

function GiftBoxList() {
  return (
    <div className='giftcard-list'>
        <ul>
            <li>
                <GiftContent 
                // 선물실패
                    status='fail'
                    giftimgUrl='/images/gift-card/listitem_02.png' 
                    ciUrl='/images/logo/frank.png' 
                    statusText= '선물 실패'
                    bage='none' 
                    inText='To.'
                    balance='김민지'
                    giftname='요기요 3만원권'
                >    
                </GiftContent>
            </li>
            <li>
                <GiftContent 
                // 보낸선물일때
                    status='normal'
                    giftimgUrl='/images/gift-card/listitem_02.png' 
                    ciUrl='/images/logo/frank.png' 
                    bage='none' 
                    inText='To.'
                    balance='김민지'
                    giftname='요기요 3만원권'
                >    
                </GiftContent>
            </li>
            <li>
                <GiftContent 
                // 보낸선물일때
                    status='normal'
                    giftimgUrl='/images/gift-card/listitem_02.png' 
                    ciUrl='/images/logo/frank.png' 
                    bage='single' 
                    boldText='선물 확인완료'
                    inText='To.'
                    balance='김민지'
                    giftname='요기요 3만원권'
                >    
                </GiftContent>
            </li>
            <li>
                <GiftContent 
                // 선물취소
                    status='cancle'
                    giftimgUrl='/images/gift-card/listitem_02.png' 
                    ciUrl='/images/logo/frank.png' 
                    statusText= '선물취소'
                    bage='none' 
                    inText='To.'
                    balance='김민지'
                    giftname='요기요 3만원권'
                >    
                </GiftContent>
            </li>
        </ul>
        
    </div>
  )
}

export default GiftBoxList