import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <fragment>
      <Route path="/" component={Home} />
    </fragment>
  );
}

export default App;
