import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";

export const App = () => {
  return (
    <>
      <Header />
      <p>Hello!</p>
      <Outlet />
    </>
  );
};
