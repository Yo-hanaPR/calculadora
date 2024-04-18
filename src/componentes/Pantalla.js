import React from 'react'
import '../stylesheets/Pantalla.css'

function Pantalla({input, history}){
    return(
        
        <div className='input'>
            
            <p className='input_history'>{history}</p>
            <p >
                {input}
            </p>
        </div>
    )
}

export default Pantalla;