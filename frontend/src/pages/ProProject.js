import React, { Component } from 'react'
import axios from "axios"

export default class ProProjects extends Component {
    constructor() {
        super()
        this.state = {
            projects: [],
            loading: true
        }
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: "http://localhost:5000/api/projects"
        })
            .then((res) => {
                this.setState({ projects: res.data })
            })
            .catch((err) => {
                this.setState(err)
            })
    }


    render() {
        return (
            <div>
                {this.state.projects.map((project) =>
                    <div>
                        <h2>{project.title}</h2>
                    </div>)}
            </div>
        )
    }
}
