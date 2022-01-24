import React, { useEffect, useRef, useState } from 'react';

type TimerArgs = {
    milisecond:number
}

export const Timer = ( {milisecond}:TimerArgs ) => {
    const [segundos, setSegundos] = useState(0);
    const ref = useRef<NodeJS.Timeout>();
    console.log( milisecond );

    useEffect(() => {
        ref.current && clearInterval(ref.current);
        ref.current = setInterval(()=> setSegundos( s => s + 1), milisecond);
    }, [ milisecond]);
    
  return <div>
      <h4>Timer:<small>{segundos}</small></h4>
  </div>;
};

