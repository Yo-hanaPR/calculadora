
import './App.css';
import php from './imagenes/php.png';
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BotonClear'
import {useState} from 'react'
import {evaluate} from 'mathjs'

function App() {
  const [history, setHistory]= useState('');
  const [input, setInput]= useState('');

  const agregarInput = val => {
    setInput(input+val);
  };
  const calcularResultado= val =>{
    if(input){
      if(input.includes('/0')){
        setInput("No se puede dividir entre cero")
      }else{
        setHistory(input);
        setInput(evaluate(input));
      }
    }else{
      alert("porfavor ingrese valores para realizar los cálculos")
    }
  };
  return (
    <div className="App">
      
      <div className='logo-contenedor'>
        <img alt="imagen de yohanna" 
        src={php}
        className='logo'
        />
      </div>
      <div className='contenedor-calculadora'>

        <Pantalla input={input} history={history}></Pantalla>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>
            1
          </Boton>
          <Boton manejarClic={agregarInput}>
            2
          </Boton>
          <Boton manejarClic={agregarInput}>
            3
          </Boton>
          <Boton manejarClic={agregarInput}>
            +
          </Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>
            4
          </Boton>
          <Boton manejarClic={agregarInput}>
            5
          </Boton>
          <Boton manejarClic={agregarInput}>
            6
          </Boton>
          <Boton manejarClic={agregarInput}>
            -
          </Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>
            7
          </Boton>
          <Boton manejarClic={agregarInput}>
            8
          </Boton>
          <Boton manejarClic={agregarInput}>
            9
          </Boton>
          <Boton manejarClic={agregarInput}>
            *
          </Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={calcularResultado}>
            =
          </Boton>
          <Boton manejarClic={agregarInput}>
            0
          </Boton>
          <Boton manejarClic={agregarInput}>
            .
          </Boton>
          <Boton manejarClic={agregarInput}>
            /
          </Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={()=>{setInput(''); setHistory('');} }>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
