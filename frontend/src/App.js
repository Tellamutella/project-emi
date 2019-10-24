import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";

import ProSignUp from "./pages/ProSignUp";
import ProNav from "./components/ProNav";
import ProLogIn from "./pages/ProLogIn";
import ProProjects from "./pages/ProProject";
import CustomerSignUp from "./pages/CustomerSignUp";


function App() {
  return (
    <>
      <ProNav />
      <Route exact path="/" component={Home} />
      <Route path="/professional/signup" component={ProSignUp} />
      <Route path="/professional/login" component={ProLogIn} />
      <Route path="/professional/projects" component={ProProjects} />
      <Route exact path="/customer/signup" component={CustomerSignUp} />
    </>
  );
}

export default App;
