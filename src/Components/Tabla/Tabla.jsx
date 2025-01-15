import { Button } from '../Button/Button'
import './Tabla.css'

export const Tabla = ({data}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Correo</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item,index)=>{
            return( 
              <tr key={index}>
                <td>{index}</td>
                <td>{item.nombre}</td>
                <td>{item.apellidos}</td>
                <td>{item.correo}</td>
                <td className='accion'>
                  <Button texto={'Actualizar'} backgroundColor={'blueviolet'} textColor={'white'} margin={'0 10px 0 0'} />
                  <Button texto={'Eliminar'} backgroundColor={'red'} textColor={'white'} margin={'0 0px 0 10px'} />
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
