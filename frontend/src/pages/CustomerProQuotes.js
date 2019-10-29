import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import "./CustomerProQuotes.scss"
import BasicLayout from '../layout/BasicLayout'
import { getSingleProject } from '../utils/projects'
import { login, getCustomer } from '../utils/auth'

export default class CustomerProQuotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            project: null,
            customer: getCustomer(),
        }
        this.handlelogin = this.handlelogin.bind(this);
    }


    handlelogin(customerId, professionalId) {
        this.props.history.push(`/customer/chat/${customerId}/${professionalId}`)
    }

    componentDidMount() {

        var projectId = this.props.match.params.id
        getSingleProject(projectId)
            .then((response) => {
                this.setState({ project: response.data })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        const customerId = this.state.customer.id
        return (
            <BasicLayout>
                <div>
                    {this.state.project === null ?
                        <p>loading </p> :
                        <div className="QuotesLargeContainer">
                            <div className="QuotesProjectContainer">
                                <h2>{this.state.project.title}</h2>
                                <p>{this.state.project.description}</p>
                            </div>
                            {this.state.project.quotes.map((quote) =>
                                <div className="QuotesContainer">
                                    <div className="QuotesContainerColRow">
                                        <h3>Quote from {quote.professional.firstName}</h3>
                                        <p>Price: ${quote.hourlyPrice}/hour</p>
                                        <p>{quote.description}</p>
                                    </div>
                                    <button onClick={() => { this.handlelogin(customerId, quote.professional._id) }}>Chat</button>
                                </div>
                            )}
                        </div>
                    }
                </div>
            </BasicLayout>
        )
    }
}
