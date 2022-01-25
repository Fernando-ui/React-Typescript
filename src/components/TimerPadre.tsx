import React, { useState } from "react";
import { Timer } from "./Timer";

export const TimerPadre = () => {
  const [milisegundo, setMilisegundo] = useState(1000);
  const [second, setSecond] = useState(1000);
  return (
    <>
      <span> Milisegundos {milisegundo}</span>
      <button
        className="btn btn-outline-success"
        onClick={() => setMilisegundo(1000)}
      >
        1000
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => setMilisegundo(2000)}
      >
        2000
      </button>
      <Timer milisecond={ milisegundo } second= { second }  />
    </>
  );
};
