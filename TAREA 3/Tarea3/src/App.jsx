import './App.css' //En el ejemplo no aparece esta linea
// import React from 'react';
import Title from './components/Titulo';
import Image from './components/Imagen';
import Details from './components/Details';
import './components/estilos.css'

function App() {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return (
    <div className='fondo'>
      <Title
        title={'Formula 1'}
      />
      <Image
        url={'https://img.freepik.com/fotos-premium/atmosfera-apuro-formula-1_168501-4487.jpg?semt=ais_hybrid'} 
      />
      {/* Detalles de el artista/personaje */}
      <Details
        genre={'Deporte'}
        status={'Activo'}
      />
    </div>
  )
}

export default App