import React, { Component } from 'react'
import axios from 'axios'
import { getUser, getCustomer } from "../utils/auth"
import { Link } from "react-router-dom";
import "./CusProject.scss"
import ProNav from "../components/ProNav"

export default class CustomerProject extends Component {

    state = {
        projects: [],
        filteredProjects: [],
        user: getCustomer()
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
            <>
                <div className="CusPro">
                    {this.state.filteredProjects.map((project) =>
                        <div className="CusProBox">
                            <div className="CusProBoxDiv">
                                <h2>{project.title}</h2>
                                <p>Quotes received: {project.quotes.length}</p>
                            </div>
                            <Link to={`/customer/projects/${project._id}`}>
                                <button>Check quotes</button>
                            </Link>
                        </div>
                    )}
                </div>
            </>
        )
    }
}
