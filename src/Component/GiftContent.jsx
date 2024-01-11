import React from 'react'
import '../css/gift-content.css'

function GiftContent({status, statusText, giftimgUrl, ciUrl, bage, boldText, inText, balance, giftname, fromName}) {
  return (
    <div id='gift-content' className={status} >
        <div className='gift-img'>
            <img src={giftimgUrl} alt='' />
            <i className='brand-logo'>
                <img src={ciUrl} alt='' />
            </i>
            <span className='dim'>
                <i>{statusText}</i>
            </span>
        </div>
        <div className='gift-info'>
            <div id='bage' className={bage}>
                <strong>{boldText}</strong>
                <i>남음</i>
            </div>
            <div className='balance'>
                <span>{inText}</span>
                <strong>{balance}</strong>
            </div>
            <p className='gift-name'>{giftname}</p>
            <p className='from-text'>{fromName}</p>
        </div>
    </div>
  )
}

GiftContent.defaultProps = { 
    status:'normal', //사용완료- 'use', 환불- 'refund' 선물취소- 'cancle'
    giftimgUrl: '/images/gift-card/listitem_02.png',   
    ciUrl: '/images/logo/frank.png',
    statusText: '사용완료',
    bage: 'offers', //받은선물 - 'offers', 보낸선물 - 'single' 없음 - 'none'
    boldText: '00일',
    inText:'잔액',
    balance: '700원',
    giftname: '상품이름',
    
}

export default GiftContent