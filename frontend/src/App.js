import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ProSignUp from "./pages/ProSignUp";
import ProLogIn from "./pages/ProLogin"
import ProProjects from "./pages/proproject/ProProject";
import CustomerSignUp from "./pages/CustomerSignUp";
import CustomerLogIn from "./pages/CustomerLogIn";
import CustomerProject from "./pages/CustomerProject";
import CustomerProQuotes from "./pages/CustomerProQuotes";
import ProjectDetails from "./pages/professional/ProjectDetails";
import { getProfessional, getCustomer, logout } from "./utils/auth";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      professional: getProfessional(),
      customer: getCustomer()
    };
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser() {
    logout();
    this.setState({
      professional: null,
      customer: null
    });
    history.push("/home");
  }
  
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            path="/professional/projects/details/m/:id"
            render={props => <ProjectDetails {...props} />}
          />
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
}

export default App;
