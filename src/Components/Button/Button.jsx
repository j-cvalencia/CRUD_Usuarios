import React from 'react'

export const Button = ({texto,backgroundColor,textColor,margin,padding,funcion}) => {
  return (
    <button onClick={funcion} style={{
      backgroundColor: backgroundColor,
      border:"none",
      padding: padding,
      margin: margin,
      color: textColor,
      cursor: "pointer"
    }}>
      {texto}
    </button>
  )
}
