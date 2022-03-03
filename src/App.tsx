import React from "react";
import { Alumno } from "./components/Alumno";
// import { ContadorRed } from "./components/ContadorRed";
// import { Counter } from "./components/Counter";
// import { Formulario2 } from "./components/Formulario2";
// import { Formulario3 } from "./components/Formulario3";
// import { Operaciones } from "./components/Operaciones";
// import { ReactMemo } from "./components/ReactMemo";
// import { Saludos } from "./components/Saludos";
// import { SumaNumero } from "./components/SumaNumero";
// import { TimerPadre } from "./components/TimerPadre";
// import { Effecto } from "./components/useEffect";
// import { Usuario } from "./components/Usuario";
// import { Appcontexto } from "./contexto/Appcontexto";
// import { Appcontexto2 } from "./contexto2/Appcontexto2";
// import { Todo2 } from "./Todo2/Todo2";
import UserContext from './components/memo/UserContext/UserContext';

function App() {
  const data = {

    name:'Fernando',
    last_name:'Sosa',
    age:26,
  };
  return (
    <>
      <UserContext.Provider value = {data}>

      <h1>Hello</h1>
      <Alumno/>
      </UserContext.Provider>
    </>
  );
}

export default App;
