import React from 'react'
import './Button.scss'
const Button = ({name}) => {
  return (
    <div>
     <a href="#contact"> <button className='btn'>{name}</button></a>
    </div>
  )
}

export default Button
