import {useEffect, useState} from 'react';
import React from 'react';
import CharacterCard from './components/CharacterCard';
import './App.css'

function App() {
  // Paso 1. 
  const [charactersList, setCharactersList] = useState([]);

  // Paso 2
  useEffect( () => {
        // Este useEffect se ejecutará una única vez cuando el componente se monte
        fetch("https://rickandmortyapi.com/api/character/?page=1")
        .then(response => response.json())
        .then((charactersList) => {
            // Acá podemos procesamos la respuesta de el endpoint
            console.log(charactersList) // Resultado de el endpoint

            // Utiliza la variable data para actualizar la variable de estado de el paso 1
            setCharactersList(charactersList.results);
          });
    }, [])  


  return (
    <div className='fondo'>
      {/* <h1>Personajes de Rick and Morty</h1> */}
      {
        charactersList.map((characters) => {
          return <CharacterCard nombre={characters.name} img={characters.image} gender={characters.gender} status={characters.status} />
        })
      }
    </div>
  )
}
export default App