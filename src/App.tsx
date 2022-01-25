import React from 'react';
import { ContadorRed } from './components/ContadorRed';
import { Counter } from './components/Counter';
import { SumaNumero } from './components/SumaNumero';
import { TimerPadre } from './components/TimerPadre';
import { Effecto } from './components/useEffect';
import { Usuario } from './components/Usuario';

function App() {
  return (
    <>
      <h1>Hola mundo desde ts</h1>
      <hr />
      <Counter />
      <Usuario />
      <SumaNumero />
      <div>
        
      </div>
      <h2> useEffect - useRef </h2>
      <hr />
      <TimerPadre />
      <hr />
      < Effecto />
      <hr />
      < ContadorRed />
    </>
  );
}

export default App;
