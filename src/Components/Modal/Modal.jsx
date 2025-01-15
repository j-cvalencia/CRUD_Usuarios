import './Modal.css'

export const Modal = () => {
  return (
    <div id='fondoModal'>
      <div id='modal'>
        <h2>Agregar</h2>
        <form action="">
          <input type="text" placeholder='Nombre'/>
          <input type="text" placeholder='Apellido'/>
          <input type="text" placeholder='Correo'/>
          <button type="submit">Agregar</button>
        </form>
      </div>
    </div>
  )
}
