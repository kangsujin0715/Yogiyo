import React from 'react'

import '../css/moretitle.css'

function MoreTitle({btnMore, titleText}) {
  return (
    <div className='main-title'>
        <h3>{titleText}</h3>
        <button className={btnMore}></button>
    </div>
  )
}


MoreTitle.defaultProps = {
    btnMore:'btn-off',
    titleText: '브랜드부터 골라보세요'
}
export default MoreTitle