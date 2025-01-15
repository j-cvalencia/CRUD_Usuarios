import React from 'react'

export const Button = ({texto,backgroundColor,textColor,margin}) => {
  return (
    <button style={{
      backgroundColor: backgroundColor,
      border:"none",
      padding:"5px 10px",
      margin: margin,
      color: textColor,
      cursor: "pointer"
    }}>
      {texto}
    </button>
  )
}
