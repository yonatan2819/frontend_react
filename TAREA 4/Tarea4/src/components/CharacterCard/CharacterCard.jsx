import React from 'react'
// import Title from './Title';
// import Image from './Image';
// import Details from './Details';

const CharacterCard = (props) => {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return (
    <div>
        <div className='titulo'>
            {props.nombre}        
        </div>
        <div>
            <img src={props.imagen}/>
        </div>
        <div className='parrafo'>
            {props.genero}
            {props.estado}
        </div>  

      

      
    </div>
  );
}
export default CharacterCard;