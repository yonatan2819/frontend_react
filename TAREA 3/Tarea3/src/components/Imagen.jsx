import React from 'react';
import './estilos.css'

function Image(props) {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return <img className='imagen' src={props.url} alt="Foto de el personaje" />;
}

export default Image;