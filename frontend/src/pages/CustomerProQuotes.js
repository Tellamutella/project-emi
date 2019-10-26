import React, { Component } from 'react'
import axios from 'axios'

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
            <div>
                {this.state.project === null ?
                    <p>loading </p> :
                    <>
                        <h2>{this.state.project.title}</h2>
                        {this.state.project.quotes.map((quote) =>
                            <>
                                <h3>{quote.professional.firstName}</h3>
                                <p>{quote.hourlyPrice}</p>
                            </>
                        )}
                    </>
                }

            </div>
        )
    }
}
