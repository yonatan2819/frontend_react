import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CharacterCard from '../characterCard/characterCard'

const App = () => {

    const [data, setData] = useState([])
    const param = useParams();
    const id = param.id

    console.log(id);
        
    console.log(param, 'param');

    useEffect(() => {
      
    fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then((data) => {
        console.log(data,'data <--');
        setData(data.results)        
    })      
    }, [])    

  return (

    <div className='contenedor'>
      <h1>Personajes</h1>
      {
        data.map((item) => {          
          return <CharacterCard nombre={item.name} img={item.image} estado={item.status} especie={item.species} genero={item.gender} />
        })
      }
      
    </div>
  )
}
export default App