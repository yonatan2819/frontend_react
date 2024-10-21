import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CharacterCard from '../characterCard/characterCard';


const App = () => {

    const [data, setData] = useState([])
    const param = useParams();
    const id = param.id

    console.log(id);
        
    console.log(param, 'param');

    useEffect(() => {
      
    fetch('https://rickandmortyapi.com/api/episode?page=1')
    .then(res => res.json())
    .then((data) => {
        console.log(data,'data <--');
        setData(data.results)        
    })      
    }, [])    

  return (

    <div className='contenedor'>
      <h1>Episodios</h1>
      {
        data.map((item) => {          
          return <CharacterCard nombre={item.name} fecha={item.air_date} episodio={item.episode}/>
        })
      }      
    </div>
  )
}
export default App