import React, { useContext } from "react";
import UserContext from "../UserContext";

type arrObj = [
  {
    name: "Fernando";
    years: 25;
  },
  {
    name: "Anacleto";
    years: 3;
  }
];
export default () => useContext(UserContext);
