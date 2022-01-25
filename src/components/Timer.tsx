import React, { useEffect, useRef, useState } from "react";

type TimerArgs = {
  milisecond: number;
  second: number;
};

export const Timer = ({ milisecond, second }: TimerArgs) => {
  const [segundos, setSegundos] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => setSegundos((s) => s + 1), milisecond);
  }, [milisecond]);

  return (
    <div>
      <h4>
        Timer:<small>Tenemos el segundo:{second}</small>
      </h4>
      {/* <h4>Timer:<small>{ JSON.stringify( milisecond ) }</small></h4> */}
    </div>
  );
};

