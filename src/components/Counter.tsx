import React, { useState } from 'react';

export const Counter = () => {

  const [counter, setCounter ] = useState(0);

  const incrementar = ( numero:number = 1):void => {
    setCounter( counter + numero);
  }
  const handleReset = ():void =>{
    setCounter( 0 );
  }

  return( 
    <>
    <div className="mt-5">
        <h3>Counter: useState</h3>
        <span>Valor:{counter}</span>
        <br />
        <button 
        className="btn btn-outline-primary mt-2"
        onClick={ ()=> incrementar() }
        >
          +1
        </button>
        <button 
        className="btn btn-outline-primary mt-2"
        onClick={ () => incrementar(2) }
        >
          +2
        </button>
        <button 
        className="btn btn-outline-primary mt-2"
        onClick={ () => incrementar(3) }
        >
          +3
        </button>
        <button 
        className="btn btn-outline-danger mt-2"
        onClick={ () => handleReset() }
        >
          Reset
        </button>
    </div>
    </>
    )
};
