import './App.css'
import Title from './components/Titulo';
import Image from './components/Imagen';
import Details from './components/Details';

function App() {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return (
    <div className='fondo'>
      <Title
        title={'Ikki'}
      />
      <Image
        url={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/186ccfc3-2dba-4d59-81de-1df5ae3437f3/d4clya4-c0fe92a3-1f80-4e36-baac-8e3d169f7028.png/v1/fill/w_900,h_927/ikki_s_face_by_mikebriceno_d4clya4-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTI3IiwicGF0aCI6IlwvZlwvMTg2Y2NmYzMtMmRiYS00ZDU5LTgxZGUtMWRmNWFlMzQzN2YzXC9kNGNseWE0LWMwZmU5MmEzLTFmODAtNGUzNi1iYWFjLThlM2QxNjlmNzAyOC5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.D5j5OgcjANxH02qLzoXfOT3raoHp0MbxUZXwBXkH8RY'} 
      />
      {/* Detalles de el artista/personaje */}
      <Details
        genre={'Masculino'}
        status={'Activo'}
      />
    </div>
  )
}

export default App