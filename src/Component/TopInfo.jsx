import React from 'react'
import '../css/giftTopInfo.css'

function TopInfo({cashStatus, normalText, strText, WaitingCash}) {
  return (
    <div id='giftTopInfo' className={cashStatus}>
        <p><span>{normalText}</span><strong>{strText}</strong></p>
        <i>{WaitingCash}</i>
    </div>
  )
}

TopInfo.defaultProps = { 
    cashStatus:'single', //한줄- 'single', 두줄- 'double' , 없음- 'none'
    normalText: '사용 가능 금액',   
    strText: '2,000,000원',
    WaitingCash: '대기중인 금액 0000원',
}

export default TopInfo