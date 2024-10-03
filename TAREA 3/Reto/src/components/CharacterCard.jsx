import React from 'react'

const CharacterCard = (props) => {
  return (
    <div>
        <h1 className='titulo'>{props.title}</h1>
        <img className='imagen' src={props.url} alt="Foto de el personaje" />
        <p className='parrafo'>
          <b>Genero:</b> {props.genre}
        </p>
        <p className='parrafo'>
          <b>Estado:</b> {props.status}
        </p>
    </div>    
  )
}
export default CharacterCard