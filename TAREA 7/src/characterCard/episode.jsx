import React from 'react'

const Episode = ({nombre, fecha, episodio}) => {
    
  return (
    <div>
        <div>
            <div>
                <h1>{nombre}</h1>
            </div>
            <div>
                <h1>{fecha}</h1>
            </div>
            <div>
                <h1>{episodio}</h1>
            </div>
        </div>
    </div>
  )
}
export default Episode