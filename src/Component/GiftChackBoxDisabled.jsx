import React from 'react'
import '../css/gift-checkbox.css'

function GiftChackBox({status, labelName, giftimgUrl, ciUrl, statusText, bage, boldText, inText, balance, giftname, fromName, counter, noticetext}) {
  return (
    <div id='gift-chackbox' className={status}>
        <input type='checkbox' id={labelName} disabled></input>
        <label for={labelName}>
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
            <div className='chack-circel'>
                <span className='circel'>
                    <i>{counter}</i>
                </span>
            </div>
        </label>
        <p>{noticetext}</p>
    </div>
  )
}

GiftChackBox.defaultProps = { 
    status:'normal', //사용불가- 'not'
    giftimgUrl: '/images/gift-card/listitem_02.png',   
    ciUrl: '/images/logo/frank.png',
    statusText: '사용불가',
    bage: 'offers', //받은선물 - 'offers', 없음 - 'none'
    boldText: '00일',
    inText:'잔액',
    balance: '700원',
    giftname: '상품이름',
    counter: '1'
    
}

export default GiftChackBox