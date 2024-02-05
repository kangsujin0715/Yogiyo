import React from 'react'
import { Box } from '@mui/material';
import '../css/giftTopInfo.css'

function TopInfo({cashStatus, normalText, strText, WaitingCash}) {
  return (
    <div id='giftTopInfo' className={cashStatus}>
        <p><span>{normalText}</span><strong>{strText}</strong></p>
        <span><i>{WaitingCash}</i>
          <button className="info"></button>
            <Box className="info-box">
              <p>받은 선물은 한번에 최대 50만원까지 사용할 수 있어요. <b>사용가능 한도를 초과하여 등록하는 경우, 사용 불가능한 대기 금액으로 보유하게 돼요.</b> 상품권을 사용하여 사용가능금액 한도 아래로 내려오면, 차감된 금액만큼 대기 금액이 자동 전환되어 사용할 수 있어요.</p>
            </Box>
        </span>
    </div>
  )
}

TopInfo.defaultProps = { 
    cashStatus:'single', //한줄- 'single', 두줄- 'double' , 없음- 'none'
    normalText: '사용 가능 금액',        
    strText: '2,000,000원',
    WaitingCash: '대기중인 금액 100,000원',
}

export default TopInfo