import React from 'react'

const Label = ({label}) => {
  return (
    <div className='text-ed-subh1 my-2 text-ed_grey_v2'>
      {label} <span className='text-ed_red'>*</span>
    </div>
  )
}

export default Label
