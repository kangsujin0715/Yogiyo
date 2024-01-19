import React from 'react'
import GiftContent from '../Component/GiftContent'
import TopInfo from '../Component/TopInfo'
import '../css/giftcard-list.css'

function GiftBoxList() {
  return (
    <div className='giftcard-list'>
        <TopInfo 
            cashStatus='double' 
            normalText='사용 가능 금액' 
            strText='2,000,000원' 
            WaitingCash='대기중인 금액 0000원'
        >
        </TopInfo>
        <ul>
            <li>
                <GiftContent 
                    status='normal'
                    giftimgUrl='/images/gift-card/listitem_02.png' 
                    ciUrl='/images/logo/frank.png' 
                    statusText='' 
                    bage='offers' 
                    boldText='15일'
                    inText='잔액'
                    balance='15,000원'
                    giftname='요기요 3만원권'
                    fromName='From. 홍길동'
                >    
                </GiftContent>
            </li>
            <li>
                <GiftContent 
                // 사용완료
                    status='use'
                    giftimgUrl='/images/gift-card/listitem_02.png' 
                    ciUrl='/images/logo/frank.png' 
                    statusText='사용완료' 
                    bage='none' 
                    boldText=''
                    inText='잔액'
                    balance='0원'
                    giftname='요기요 3만원권'
                    fromName='From. 홍길동'
                >    
                </GiftContent>
            </li>
            <li>
                <GiftContent 
                // 사용완료
                    status='refund'
                    giftimgUrl='/images/gift-card/listitem_02.png' 
                    ciUrl='/images/logo/frank.png' 
                    statusText='환불' 
                    bage='none' 
                    boldText=''
                    inText='잔액'
                    balance='0원'
                    giftname='요기요 3만원권'
                    fromName='From. 홍길동'
                >    
                </GiftContent>
            </li>
            
        </ul>
        
    </div>
  )
}

export default GiftBoxList