import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Chat from "../components/Chat"
import { ChatkitProvider, TokenProvider } from '@pusher/chatkit-client-react';
import { getCustomer } from '../utils/auth';
import BasicLayout from '../layout/BasicLayout';
import "./CustomerQuoteChat.scss"

require('dotenv').config();

const tokenProvider = new TokenProvider({
    url: process.env.REACT_APP_CHATKIT_TOKEN
});
const instanceLocator = process.env.REACT_APP_CHATKIT_INSTANCE;


export default class CustomerQuoteChat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customer: getCustomer(),
            quote: props.location.quote,
            project: props.location.project,
            professional: props.location.quote
        }
    }
    render() {
        return (
            <BasicLayout>
                <Link to={`/customer/projects/${this.state.project._id}`}>
                    <button className="back-margin">Back</button>
                </Link>
                <div className="customer-chat-container">
                    <div className="project-info-container">
                        <h3>{this.state.project.title}</h3>
                        <p>{this.state.project.description}</p>
                        <h4>Name of professional:</h4>
                        <p>{this.state.quote.professional.firstName} {this.state.quote.professional.lastName}</p>
                        <h4>Quoted Price:</h4>
                        <p>${this.state.quote.hourlyPrice}/hr</p>
                        <h4>Quote Description:</h4>
                        <p>{this.state.quote.description}</p>
                        <h4>Contact Number:</h4>
                        <p>{this.state.quote.professional.mobile}</p>
                        {/* <a href="https://wa.me/+85264446184"><button>WhatsApp</button></a> */}
                    </div>
                    <ChatkitProvider
                        instanceLocator={instanceLocator}
                        tokenProvider={tokenProvider}
                        userId={this.state.customer.id}>
                        <Chat otherUserId={this.state.quote.professional._id} />
                    </ChatkitProvider>
                </div>
            </BasicLayout >
        )
    }
}
