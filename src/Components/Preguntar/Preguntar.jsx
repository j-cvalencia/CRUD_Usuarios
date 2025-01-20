import { Button } from "../Button/Button"
import './Preguntar.css'

export const Preguntar = ({pregunta,display,fbtn1,fbtn2}) => {
  return (
    <div id="fondoPregunta" style={{display: display}}>
      <div id="pregunta">
        <h2>{pregunta}</h2>
        <div id="botones">
          <Button backgroundColor={'blueviolet'} textColor={'white'} texto={'Si'} padding={'5px 10px'} funcion={fbtn1}/>
          <Button backgroundColor={'red'} textColor={'white'} texto={'No'} padding={'5px 10px'} funcion={fbtn2}/>
        </div>
      </div>
    </div>
  )
}
