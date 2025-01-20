import { useForm } from 'react-hook-form'
import { ButtonCerrar } from '../ButtonCerrar/ButtonCerrar';
import './Modal2.css'

export const Modal2 = ({funcion,display,funcionCerrar}) => {
  const {register,handleSubmit,reset,formState:{errors}}=useForm({
    defaultValues: {
      nombre: '',
      apellido: '',
      correo: ''
    },
  });
  const onSubmit=(data)=>{
    funcion(data);
    reset();
  }
  return (
    <div id='fondoModal' style={{display: display}}>
      <div id='modal'>
        <ButtonCerrar top={'-10px'} right={'-10px'} funcion={funcionCerrar}/>
        <h2>Editar</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder='Nombre' {...register('nombre',{
            required: {
              value: false,
            }
          })}/>
          {errors.nombre && <span>{errors.nombre.message}</span>}
          <input type="text" placeholder='Apellido' {...register('apellido', {
            required:{
              value: false
            }
          })}/>
          {errors.apellido && <span>{errors.apellido.message}</span>}
          <input type="text" placeholder='Correo'  {...register('correo', {
            required: {
              value: false
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Formato de email inválido',
            },
          })}/>
          {errors.correo && <span>{errors.correo.message}</span>}
          <button type="submit">Actualizar</button>
        </form>
      </div>
    </div>
  )
}
