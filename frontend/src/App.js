import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import ProSignUp from "./pages/ProSignUp";
import ProNav from "./components/ProNav";
import ProLogIn from "./pages/ProLogIn";
import ProProjects from "./pages/ProProject";

function App() {
  return (
    <>
      <ProNav />
      <Route exact path="/" component={Home} />
      <Route path="/professional/signup" component={ProSignUp} />
      <Route path="/professional/login" component={ProLogIn} />
      <Route path="/professional/projects" component={ProProjects} />
    </>
  );
}

export default App;
