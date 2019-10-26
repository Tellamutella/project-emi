import React, { Component } from 'react'
import axios from 'axios'
import { getUser } from "../utils/auth"
import { Link } from "react-router-dom";
import "./CusProject.scss"

export default class CustomerProject extends Component {

    state = {
        projects: [],
        filteredProjects: [],
        user: getUser()
    }

    filterProject = (data) => {
        var matchResult = data.filter((project) =>
            project.customer === this.state.user.id)
        this.setState({ filteredProjects: matchResult })
    }


    componentDidMount() {
        axios({
            method: "GET",
            url: "http://localhost:5000/api/projects"
        })
            .then((project) => {
                this.setState({ projects: project.data })
                this.filterProject(project.data)
            })
            .catch((err) => {
                this.setState(err)
            })
    }



    render() {
        return (
            <div className="CusPro">
                {this.state.filteredProjects.map((project) =>
                    <div className="CusProBox">
                        <h2>{project.title}</h2>

                        <p>You have received {project.quotes.length} quotes</p>
                        <Link to={`/customer/projects/${project._id}`}>
                            <button>Check quotes</button>
                        </Link>
                    </div>
                )}
            </div>
        )
    }
}
