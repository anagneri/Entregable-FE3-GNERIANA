import { useState } from "react";
import Card from "./Card";


function App() {

  const [nombre, setNombre] = useState("")
  const [codigo, setCodigo] = useState("")
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    if (nombre.length > 3 && codigo.length > 6){
      setEnviado(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <>
      <h1>Registro de Medicamentos</h1>
      <form>
          
          <label>Nombre: </label>
          <input
            type="text"
            placeholder="Ingrese nombre..."
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />

          <label>Codigo: </label>
          <input
            type="text"
            placeholder="Ingrese codigo..."
            value={codigo}
            onChange={e => setCodigo(e.target.value)}
          />

          <button onClick={handleSubmit}>Enviar</button>
          {enviado && <h3>Medicamento: {nombre} Codigo: {codigo} ha sido ingresado correctamente!</h3>}
          {error && <h3 style = {{color: 'red'}}>Por favor chequea que la información sea correcta</h3>}
      </form>
      /*<Card/> */
    </>
  );
}

export default App;
