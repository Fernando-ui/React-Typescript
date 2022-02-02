import React from 'react';
import useUser2 from './hooks/useUser2';

export const InfoText = () => {
    const {apellido, estatura, nombre} = useUser2();

  return <>
    <h5>Tenemos el nombre  :{nombre}, apellido:{apellido} y estatura:{estatura} </h5>
  </>;
};
