import React, { Component } from 'react'
import axios from 'axios'
import "./CustomerProQuotes.scss"
import BasicLayout from '../layout/BasicLayout'

export default class CustomerProQuotes extends Component {

    state = {
        project: null
    }
    componentDidMount() {
        var projectId = this.props.match.params.id
        axios({
            url: `http://localhost:5000/api/customer/projects/${projectId}`,
            method: "GET"
        })
            .then((res) => {
                this.setState({ project: res.data });
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
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
                                    <button>Chat</button>
                                </div>
                            )}
                        </div>
                    }

                </div>
            </BasicLayout>
        )
    }
}
