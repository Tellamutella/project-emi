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
import Chat from "./pages/Chat"
import { ChatkitProvider, TokenProvider } from '@pusher/chatkit-client-react';

require('dotenv').config();

// const tokenProvider = new TokenProvider({
//   url: `${process.env.CHATKIT_TOKEN}`
// });

const tokenProvider = new TokenProvider({
  url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/ad1a82fb-1e31-4c60-b09a-00df47ef2751/token",
});

const instanceLocator = "v1:us1:ad1a82fb-1e31-4c60-b09a-00df47ef2751";
// const instanceLocator = process.env.CHATKIT_INSTANCE;

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

        <Route path="/customer/projects/:id" component={CustomerProQuotes} />
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

        <Route path="/customer/chat/:customerId/:professionalId" render={props => (
          <ChatkitProvider
            {...props}
            instanceLocator={instanceLocator}
            tokenProvider={tokenProvider}
            userId={props.match.params.customerId}>
            <Chat otherUserId={props.match.params.professionalId} />
          </ChatkitProvider>
        )}>

        </Route>


      </Switch>
    </>
  );
}

export default App;
