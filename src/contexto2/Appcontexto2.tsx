import React from "react";
import { InfoText } from "./InfoText";
import UserContext2 from "./UserContext2";

export const Appcontexto2 = () => {
  const obj = {
    nombre: "fernando",
    apellido: "sosa",
    estatura: 190,
  };
  return (
    <>
      <UserContext2.Provider value={obj}>
        <h1>AppContexto2</h1>
        <InfoText />
      </UserContext2.Provider>
    </>
  );
};
