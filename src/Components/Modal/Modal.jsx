import { useForm } from 'react-hook-form'
import './Modal.css'

export const Modal = ({funcion,display}) => {
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
        <h2>Agregar</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder='Nombre' {...register('nombre',{
            required: {
              value: true,
              message :'El nombre es obligatorio'
            }
          })}/>
          {errors.nombre && <span>{errors.nombre.message}</span>}
          <input type="text" placeholder='Apellido' {...register('apellido', {
            required:{
              value: true,
              message: 'El apellido es obligatorio'
            }
          })}/>
          {errors.apellido && <span>{errors.apellido.message}</span>}
          <input type="text" placeholder='Correo'  {...register('correo', {
            required: 'El email es obligatorio',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Formato de email inválido',
            },
          })}/>
          {errors.correo && <span>{errors.correo.message}</span>}
          <button type="submit">Agregar</button>
        </form>
      </div>
    </div>
  )
}
