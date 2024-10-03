import React from 'react';

function Image(props) {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return <img className='imagen' src={props.url} alt="Foto ikki" />;
}

export default Image;