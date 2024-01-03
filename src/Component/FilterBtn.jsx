import React from 'react'
import '../css/fileBtn.css'

function FilterBtn({btnName, selectThis}) {
  return (
    <button className={selectThis}>
        <p>{btnName}<i></i></p>
    </button>
  )
}

export default FilterBtn