import { useState } from 'react'
import Form from './Form'
import Card from './Card'
import './App.css'

function App() {
  const [mascotas, setMascotas] = useState([])

  const addMascota = (mascota) => {
    setMascotas([...mascotas, mascota])
  }

  return (
    <div className='App'>
      <h1>Registre a su mascota</h1>
      <Form onAddMascota={addMascota}/>
      <Card validaOK={validaOK} mascota={mascota}/>
    </div>
  )
}

export default App
