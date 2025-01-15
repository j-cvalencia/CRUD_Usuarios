import { Tabla } from "./Components/Tabla/Tabla";
import { Modal } from "./Components/Modal/Modal";
import { useState } from "react";
import data from './data.json'
import './App.css'

function App() {
  const [usuarios, setUsuarios] = useState(data);

  const agregarUsuario=()=>{
    const nuevoUsuario = {
      nombre: "Ana María",
      apellidos: "Rodríguez Pérez",
      correo: "AnaMaria123@gmail.com",
    };
  
    setUsuarios([...usuarios, nuevoUsuario]);
  }
  
  return (
    <>
      <Modal/>
      <div className='titulo'>
        <button  onClick={()=>agregarUsuario()}>
          +
        </button>
        <h1>CRUD de usuarios</h1>
      </div>
      <Tabla data={usuarios} />
    </>
  )
}

export default App
