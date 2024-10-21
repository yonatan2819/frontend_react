import React from 'react'

const CharacterCard = ({nombre, img, gender, status}) => {
    console.log(status, 'status');

  return (
    <div>
        <div className='tarjeta'>
            <div className='titulo'>
                <h1>{nombre}</h1>
            </div>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='parrafo'>
                <span>
                    Gender: {gender}
                </span>
            </div>
            <div className='parrafo'>
                <span>
                    Status: {status}
                </span>
            </div>
        </div>
    </div>    
  )
}

export default CharacterCard