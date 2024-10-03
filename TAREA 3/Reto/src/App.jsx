import './App.css'
import CharacterCard from './components/CharacterCard'

function App() {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return (
    <div className='fondo'>
      <div className='tarjeta'>
      <CharacterCard
        title={'Ikki'}
        url={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/186ccfc3-2dba-4d59-81de-1df5ae3437f3/d4clya4-c0fe92a3-1f80-4e36-baac-8e3d169f7028.png/v1/fill/w_900,h_927/ikki_s_face_by_mikebriceno_d4clya4-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTI3IiwicGF0aCI6IlwvZlwvMTg2Y2NmYzMtMmRiYS00ZDU5LTgxZGUtMWRmNWFlMzQzN2YzXC9kNGNseWE0LWMwZmU5MmEzLTFmODAtNGUzNi1iYWFjLThlM2QxNjlmNzAyOC5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.D5j5OgcjANxH02qLzoXfOT3raoHp0MbxUZXwBXkH8RY'} 
        genre={'Masculino'}
        status={'Activo'}        
      />
      </div>

      <div className='tarjeta'>
      <CharacterCard
        title={'Shiryu'}
        url={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/186ccfc3-2dba-4d59-81de-1df5ae3437f3/d4chq4e-5683f0db-fead-40c5-8f0d-2927e68e23a9.png/v1/fill/w_900,h_886/shiryu_s_face_by_mikebriceno_d4chq4e-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODg2IiwicGF0aCI6IlwvZlwvMTg2Y2NmYzMtMmRiYS00ZDU5LTgxZGUtMWRmNWFlMzQzN2YzXC9kNGNocTRlLTU2ODNmMGRiLWZlYWQtNDBjNS04ZjBkLTI5MjdlNjhlMjNhOS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Mllmz6GELbcKy8dez9VRFouhA3r3JL-Lvn2Plk6SxRk'} 
        genre={'Masculino'}
        status={'Activo'}
      />
      </div>
      <div className='tarjeta'>
      <CharacterCard
        title={'Seiya'}
        url={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/186ccfc3-2dba-4d59-81de-1df5ae3437f3/d4chpoh-733e7a12-6aaf-421a-a028-6b2eff18045a.png/v1/fill/w_894,h_894/seiya_s_face_by_mikebriceno_d4chpoh-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMTg2Y2NmYzMtMmRiYS00ZDU5LTgxZGUtMWRmNWFlMzQzN2YzXC9kNGNocG9oLTczM2U3YTEyLTZhYWYtNDIxYS1hMDI4LTZiMmVmZjE4MDQ1YS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.54CAGnHjg-Eg9eHMH5AvgeYzfS3iitMuvI8X2NrMJ0E'} 
        genre={'Masculino'}
        status={'Activo'}      
      />
      </div>
    </div>
  )
}

export default App