import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";

import ProSignUp from "./pages/ProSignUp";
import ProNav from "./components/ProNav";
import ProLogIn from "./pages/ProLogIn";
import ProProjects from "./pages/ProProject";
import CustomerSignUp from "./pages/CustomerSignUp";
import CusNav from "./components/CusNav";
import CustomerLogIn from "./pages/CustomerLogIn";
import CustomerProject from "./pages/CustomerProject";
import CustomerProQuotes from "./pages/CustomerProQuotes";


function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/professional/signup" component={ProSignUp} />
      <Route path="/professional/login" component={ProLogIn} />
      <Route path="/professional/projects" component={ProProjects} />
      <Route exact path="/customer/signup" component={CustomerSignUp} />
      <Route path="/customer/login" component={CustomerLogIn} />
      <Route exact path="/customer/projects" component={CustomerProject} />
      <Route path="/customer/projects/:id" component={CustomerProQuotes} />
    </>
  );
}

export default App;
