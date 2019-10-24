import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomerSignUp from "./pages/CustomerSignUp";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/customer/signup" component={CustomerSignUp} />
    </>
  );
}

export default App;
