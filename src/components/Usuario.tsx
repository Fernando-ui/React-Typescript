import React, { useState } from "react";
interface User {
  uid: string;
  name: string;
}

export const Usuario = () => {
  const [usuario, setUsuario] = useState<User>();

  const login = () => {
    setUsuario({
      uid: "ABC123",
      name: "Fernando Sosa",
    });
  };
  return (
    <div className="mt-5">
      <h3>Usuario: useState</h3>
      <button className="btn btn-outline-primary" onClick={login}>
        Login
      </button>
      {
      !usuario 
        ? 
      (
        <div>No existe el usuario</div>
      ) : 
      (
        <pre>{ JSON.stringify(usuario) }</pre>
      )}
    </div>
  );
};
