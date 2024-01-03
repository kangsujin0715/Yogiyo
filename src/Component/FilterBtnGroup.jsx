import React from 'react'
import FilterBtn from '../Component/FilterBtn'
import ResetBtn from '../Component/ResetBtn'
import '../css/filterBtnGroup.css'

function FilterBtnGroup() {
  return (
    <div className='filterBtn-Group'>
      <ResetBtn />
      <FilterBtn btnName='브랜드' selectThis='active' /><FilterBtn btnName='가격'/><FilterBtn btnName='랭킹순' />
     
    </div>
  )
}

export default FilterBtnGroup