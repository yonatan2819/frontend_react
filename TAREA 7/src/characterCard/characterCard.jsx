import React from 'react'
import '../App.css'

const CharacterCard = ({nombre, img, estado, especie, genero, fecha, episodio }) => { //created
    console.log(estado,'status');    
    
  return (
    <div className='episode'>
        <div>
            <div>
                <h1>{nombre}</h1>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <span>
                <h2>{estado}</h2>
                </span>
            </div>
            <div>
                <span>
                   <h2>{especie}</h2>
                </span>
            </div>
            <div>
                <span>
                <h2>{genero}</h2>
                </span>
            </div>
            <div>
                <h1>{fecha}</h1>
            </div>
            <div>
                <h1>{episodio}</h1>
            </div>
            {/* <div>
                <h2>Fecha de creacion</h2>
                <span>{created}</span>
            </div> */}

        </div>
    </div>
  )
}
export default CharacterCard