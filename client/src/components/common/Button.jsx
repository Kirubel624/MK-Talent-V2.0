import React from 'react'

const Button = ({onClick,type,disabled,props,style,text}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={style} type={type} {...props}>
      {text}
    </button>
  )
}

export default Button
