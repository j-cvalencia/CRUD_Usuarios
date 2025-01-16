import './Confirmacion.css'
//"https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png"
export const Confirmacion = ({display,texto,imagen}) => {
  return (
    <div id='fondoConfirmacion' style={{display: display}} >
      <div id='confirmacion'>
        <img src={imagen} width={'200em'}/>
        <h2>{texto}</h2>
      </div>
    </div>
  )
}
