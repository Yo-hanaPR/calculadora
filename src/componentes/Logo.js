import React from 'react'

import php from '../imagenes/php.png';

function Logo(){
    return (
        <div className='logo-contenedor'>
        <img alt="imagen de yohanna" 
        src={php}
        className='logo'
        />
      </div>
    )
}
export default Logo;