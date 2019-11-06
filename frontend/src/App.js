import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ProSignUp from "./pages/ProSignUp";
import ProLogIn from './pages/ProLogIn';
import ProProjects from "./pages/proproject/ProProject";
import CustomerSignUp from "./pages/CustomerSignUp";
import CustomerLogIn from "./pages/CustomerLogIn";
import CustomerProject from "./pages/CustomerProject";
import CustomerProQuotes from "./pages/CustomerProQuotes";
import ProjectDetails from "./pages/professional/ProjectDetails";
import NotFound from "./pages/NotFound";

import { ChatkitProvider, TokenProvider } from '@pusher/chatkit-client-react';
import CustomerQuoteChat from "./pages/CustomerQuoteChat";

// require('dotenv').config();

const tokenProvider = new TokenProvider({
  url: process.env.REACT_APP_CHATKIT_TOKEN
});
const instanceLocator = process.env.REACT_APP_CHATKIT_INSTANCE;

function App() {

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

        <Route exact path="/customer/projects/:id" component={CustomerProQuotes} />
        {/* <Route path="/customer/projects/:id" render={props => (
          <ChatkitProvider
            instanceLocator={instanceLocator}
            tokenProvider={tokenProvider}
            userId={props.match.params.customerId}>
            <CustomerProQuotes />
            <Chat otherUserId={props.match.params.professionalId} />
          </ChatkitProvider>
        )}>

        </Route> */}
        <Route path="/customer/projects/:projectId/:quoteId" component={CustomerQuoteChat} />

        {/* this one this one this one
        <Route path="/customer/chat/:customerId/:professionalId" render={props => (
          <ChatkitProvider
            {...props}
            instanceLocator={instanceLocator}
            tokenProvider={tokenProvider}
            userId={props.match.params.customerId}>
            <Chat otherUserId={props.match.params.professionalId} />
          </ChatkitProvider>
        )}>
        </Route> */}



        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
