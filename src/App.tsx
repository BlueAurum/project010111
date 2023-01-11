import React from "react";
import { AppRouter, Navbar } from "./components";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
