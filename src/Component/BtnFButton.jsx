import React from 'react'
import '../css/btn-f-btn.css'

function BtnFButton({btnText}) {
  return (
    <div className='btn-f-btn'>
      <button>{btnText}</button>
    </div>
  )
}

export default BtnFButton