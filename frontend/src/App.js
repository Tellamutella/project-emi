import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";

import ProSignUp from "./pages/ProSignUp";
import ProNav from "./components/ProNav";
import ProLogIn from "./pages/ProLogIn";
import ProProjects from "./pages/ProProject";
import CustomerSignUp from "./pages/CustomerSignUp";
import CustomerLogIn from "./pages/CustomerLogIn";
import CustomerProject from "./pages/CustomerProject";
import CustomerProQuotes from "./pages/CustomerProQuotes";
import { getProfessional, getCustomer, logout } from "./utils/auth";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      professional: getProfessional(),
      customer: getCustomer()
    }
    this.logoutUser = this.logoutUser.bind(this)
  }

  logoutUser() {
    logout()
    this.setState({
      professional: null,
      customer: null
    });
    history.push('/home')
  }

  render() {
    return (
      <>
        <ProNav
          logoutUser={this.logoutUser}
          professional={this.state.professional}
          customer={this.state.customer}
        />

        <Route path="/home" component={Home} />
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
}

export default App;
