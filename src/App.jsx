import { Tabla } from "./Components/Tabla/Tabla";
import { Modal } from "./Components/Modal/Modal";
import { Confirmacion } from "./Components/Confirmacion/Confirmacion";
import { useState } from "react";
import { Preguntar } from "./Components/Preguntar/Preguntar";
import './App.css'

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [activarModal, setActivarModal] = useState(false);
  const [activarConfirmacion, setActivarConfirmacion] = useState(false);
  const [activarEliminar, setActivarEliminar] = useState(false);
  const [preguntarEliminar, setPreguntarEliminar] = useState();
  const [contador, setContador] = useState(0);

  const [valorAEliminar,setValorAEliminar] = useState();

  const modal=()=>{
    setActivarModal(!activarModal);
  }

  const agregarUsuario=(data)=>{
    const nuevoUsuario = {
      id: contador,
      nombre: data.nombre,
      apellidos: data.apellido,
      correo: data.correo,
    };
    setUsuarios([...usuarios, nuevoUsuario]);
    setActivarModal(!activarModal);
    data.nombre = '';
    data.apellido = '';
    data.correo = '';
    setActivarConfirmacion(true);
    setContador(contador+1);

    setTimeout(() => {
      setActivarConfirmacion(false);
    }, 2000);
    
  }

  const preguntarEliminacion=(e)=>{
    setValorAEliminar(parseInt(e.target.parentNode.parentNode.children[0].textContent.trim()));
    setPreguntarEliminar(true);
  }

  const eliminar=(e)=>{
    setPreguntarEliminar(false);
    setUsuarios(
      usuarios.filter(element => element.id !== valorAEliminar)
    );
    setActivarEliminar(true);
    setValorAEliminar('');
    setTimeout(()=>{
      setActivarEliminar(false);
    },2000);
    
  };
  
  return (
    <>
      <Modal display={activarModal ? "flex" : "none"} funcion={agregarUsuario}/>
      <Confirmacion display={activarConfirmacion ? "flex" : "none"} imagen={'https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png'} texto={'Se agrego correctamente'} />
      <Confirmacion display={activarEliminar ? "flex" : "none"}  imagen={'https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png'} texto={'Se elimino correctamente'} />
      <Preguntar display={preguntarEliminar ? 'flex' : 'none'} pregunta={'¿Seguro que quieres eliminar?'} fbtn1={eliminar} />
      
      <div className='titulo'>
        <button onClick={modal} >
          +
        </button>
        <h1>CRUD de usuarios</h1>
      </div>
      <Tabla data={usuarios} fbtn2={preguntarEliminacion} />
    </>
  )
}

export default App
