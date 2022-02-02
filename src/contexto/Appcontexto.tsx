import React, { createContext, useContext } from "react";
import { MoreInfo } from "./MoreInfo";
import { MoreInfo2 } from "./MoreInfo2";
import UserContext from "./UserContext";


export const Appcontexto = () => {
  const data = {
    name:'fernando',
    years:25,
  }
  const data2 = {
    name:'Anacleto',
    years:5,
  }
   
  return (
    <>
      <UserContext.Provider value={ [data, data2] }>
        <div>Use context</div>
        <MoreInfo />
         <MoreInfo2/>
      </UserContext.Provider>
    </>
  );
};
