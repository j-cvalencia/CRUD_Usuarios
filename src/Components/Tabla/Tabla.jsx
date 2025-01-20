import { Button } from '../Button/Button'
import './Tabla.css'

export const Tabla = ({data,fbtn1,fbtn2}) => {

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
          data.map((item)=>{
            return( 
              <tr key={item.id}>
                <td width={'5%'}>{item.id}</td>
                <td width={'30%'}>{item.nombre}</td>
                <td width={'30%'}>{item.apellido}</td>
                <td width={'25%'}>{item.correo}</td>
                <td className='accion'>
                  <Button texto={'Editar'} backgroundColor={'blueviolet'} textColor={'white'}  funcion={fbtn1}/>
                  <Button texto={'Eliminar'} backgroundColor={'red'} textColor={'white'}   funcion={fbtn2} />
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
