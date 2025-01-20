import './ButtonCerrar.css'

export const ButtonCerrar = ({top,right,bottom,left,funcion}) => {
  return (
    <div onClick={funcion} className='cerrar' style={{top: top, right: right, bottom:bottom, left: left}}>
      X
    </div>
  )
}
