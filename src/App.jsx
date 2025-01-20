import { Tabla } from "./Components/Tabla/Tabla";
import { Modal } from "./Components/Modal/Modal";
import { Modal2 } from "./Components/Modal2/Modal2";
import { Confirmacion } from "./Components/Confirmacion/Confirmacion";
import { useState } from "react";
import { Preguntar } from "./Components/Preguntar/Preguntar";
import './App.css'

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [activarModal, setActivarModal] = useState(false);
  const [activarModal2, setActivarModal2] = useState(false);
  const [activarConfirmacion, setActivarConfirmacion] = useState(false);
  const [activarEliminar, setActivarEliminar] = useState(false);
  const [preguntarEliminar, setPreguntarEliminar] = useState();
  const [contador, setContador] = useState(0);

  const [valorAEliminar,setValorAEliminar] = useState();
  const [valorAEditar,setValorAEditar] = useState();

  const modal=()=>{
    setActivarModal(!activarModal);
  };

  const modal2=(e)=>{
    setActivarModal2(true);
    setValorAEditar(parseInt(e.target.parentNode.parentNode.children[0].textContent.trim()))
  };
  
  const editarUsuario=(data)=>{
    const editar = usuarios.find((usuario)=> usuario.id == valorAEditar);
    
    if(data.nombre !== ''){
      editar.nombre = data.nombre;
      setActivarModal2(false);
    }
    if(data.apellido !== ''){
      editar.apellido = data.apellido;
      setActivarModal2(false);
    }
    if(data.correo !== ''){
      editar.correo = data.correo;
      setActivarModal2(false);
    }
    setActivarModal2(false);
  };

  const agregarUsuario=(data)=>{
    const nuevoUsuario = {
      id: contador,
      nombre: data.nombre,
      apellido: data.apellido,
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
  };


  const preguntarEliminacion=(e)=>{
    setValorAEliminar(parseInt(e.target.parentNode.parentNode.children[0].textContent.trim()));
    setPreguntarEliminar(true);
  };
  const eliminar=()=>{
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
      <Modal display={activarModal ? "flex" : "none"} funcion={agregarUsuario} funcionCerrar={()=>setActivarModal(false)}/>
      <Modal2 display={activarModal2 ? "flex" : "none"} funcion={editarUsuario} funcionCerrar={()=>setActivarModal2(false)}/>
      <Confirmacion display={activarConfirmacion ? "flex" : "none"} imagen={'https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png'} texto={'Se agrego correctamente'} />
      <Confirmacion display={activarEliminar ? "flex" : "none"}  imagen={'https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png'} texto={'Se elimino correctamente'} />
      <Preguntar display={preguntarEliminar ? 'flex' : 'none'} pregunta={'¿Seguro que quieres eliminar?'} fbtn1={eliminar} fbtn2={()=>{setPreguntarEliminar(false);}}/>
      
      <div className='titulo'>
        <button onClick={modal} >
          +
        </button>
        <h1>CRUD de usuarios</h1>
      </div>
      <Tabla data={usuarios} fbtn1={modal2} fbtn2={preguntarEliminacion} />
    </>
  )
}

export default App
