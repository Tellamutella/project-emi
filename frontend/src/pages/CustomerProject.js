import React, { Component } from 'react'
import axios from 'axios'
import { getUser, getCustomer } from "../utils/auth"
import { Link } from "react-router-dom";
import "./CusProject.scss"
import ProNav from "../components/ProNav"
import BasicLayout from '../layout/BasicLayout';
import { getProjects } from "../utils/projects";

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

        getProjects()
            .then((projects) => {
                this.setState({ projects: project.data })
                this.filterProject(project.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    render() {
        return (
            <BasicLayout>
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
            </BasicLayout>
        )
    }
}
