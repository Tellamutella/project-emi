import React from "react";
import { Route, Switch } from "react-router-dom";
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
import ProjectDetails from "./pages/professional/ProjectDetails";

function App() {
  return (
    <>
      <Switch>
        <Route
          path="/professional/projects/details/m/:id"
          render={props => <ProjectDetails {...props} />}
        />
        <Route exact path="/" component={Home} />
        <Route path="/professional/signup" component={ProSignUp} />
        <Route path="/professional/login" component={ProLogIn} />
        <Route path="/professional/projects" component={ProProjects} />
        <Route exact path="/customer/signup" component={CustomerSignUp} />
        <Route path="/customer/login" component={CustomerLogIn} />
        <Route exact path="/customer/projects" component={CustomerProject} />
        <Route path="/customer/projects/:id" component={CustomerProQuotes} />
      </Switch>
    </>
  );
}

export default App;
