import React from 'react';
import './estilos.css'

function Details(props) {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return (
    <div>
        <p className='parrafo'>
          <b>Genero:</b> {props.genre}
        </p>
        <p className='parrafo'>
          <b>Estado:</b> {props.status}
        </p>
    </div>
  );
}
export default Details;