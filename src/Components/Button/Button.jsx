import React from 'react'
import './Button.scss'
const Button = ({name}) => {
  return (
    <div>
      <button className='btn'>{name}</button>
    </div>
  )
}

export default Button
