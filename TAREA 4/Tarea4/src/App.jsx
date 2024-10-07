import { useEffect ,useState } from 'react'
import './App.css'
import CharacterCard from './components/CharacterCard/CharacterCard';

function App() {
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [genero, setGenero] = useState("");
  const [estado, setEstado] = useState("");

    useEffect(() => {
      const url ='https://rickandmortyapi.com/api/character/1'
      fetch(url)
      .then(res => res.json())
      .then((result) => {
          console.log(result, 'result <---');

          setNombre(result.name)
          setImagen(result.image)
          setGenero(result.gender)
          setEstado(result.status)
    })
  })
  return (
    <div className='fondo'>
      {/* <h1>Personajes de Rick and Morty</h1> */}
      <CharacterCard nombre = {nombre}/>
      <CharacterCard imagen = {imagen}/>
      <CharacterCard genero = {genero}/>
      <CharacterCard estado = {estado}/>
    </div>
  )
}
export default App
