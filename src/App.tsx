import React from "react";
import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import { Formulario2 } from "./components/Formulario2";
import { Formulario3 } from "./components/Formulario3";
import { Operaciones } from "./components/Operaciones";
import { Saludos } from "./components/Saludos";
import { SumaNumero } from "./components/SumaNumero";
import { TimerPadre } from "./components/TimerPadre";
import { Effecto } from "./components/useEffect";
import { Usuario } from "./components/Usuario";
import { Appcontexto } from "./contexto/Appcontexto";
import { Appcontexto2 } from "./contexto2/Appcontexto2";
import { Todo } from "./todo/Todo";

function App() {
  return (
    <>
      <h1>Hola mundo desde ts</h1>
      <hr />
      <Counter />
      <Usuario />
      <SumaNumero />
      <div></div>
      <h2> useEffect - useRef </h2>
      <hr />
      <TimerPadre />
      <hr />
      <Effecto />
      <hr />
      <ContadorRed />
      <hr />
      <h2> useReducer </h2>
      <hr />
      <Operaciones />
      <Saludos />
      <br />
      <h2> customHooks </h2>
      <hr />
      {/* <Formulario/> */}
      <Formulario2 />
      <br />
      <br />
      <br />
      <br />
      <Formulario3 />
      <br />
      <hr />
      <br />
      <hr />
      <Todo />
      {/* <Appcontexto /> */}
      <Appcontexto2/>
    </>
  );
}

export default App;
