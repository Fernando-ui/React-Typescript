import React from "react";
import { createContext } from "react";

const UserContext = createContext([
  {
    name: "Fernando",
    years: 26,
  },
  {
    name: "Anacleto",
    years: 3,
  },
]);

export default UserContext;
