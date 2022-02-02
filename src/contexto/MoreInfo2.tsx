import React from 'react';
import useUser from './hooks/useUser';

export const MoreInfo2 = () => {
    const respuesta = useUser();
  return <>
    <div>Estamos dentro de otro hook {JSON.stringify(respuesta)}</div>
  </>;
};
