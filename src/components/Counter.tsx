import React, { useState } from 'react';

export const Counter = () => {

  const [counter, setCounter ] = useState(0);

  const incrementar = ( e:any, numero:number = 1):void => {
    setCounter( counter + numero);
  }


  return( 
    <>
    <div className="mt-5">
        <h3>Counter: useState</h3>
        <span>Valor:{counter}</span>
        <br />
        <button 
        className="btn btn-outline-primary mt-2"
        onClick={ incrementar }
        >
          +1
        </button>
        <button 
        className="btn btn-outline-primary mt-2"
        onClick={ () => incrementar(null,2) }
        >
          +2
        </button>
    </div>
    </>
    )
};
