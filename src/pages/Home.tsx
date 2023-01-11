import React from "react";
import { useAppDispath } from "../hooks/useTypedHooks";

const Home = () => {

  const dispatch = useAppDispath()

  const logoutHandler = () => {
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={logoutHandler}>выйти</button>
    </div>
  );
};

export default Home;
