import React, { Component } from "react";
import { getUser, getCustomer } from "../utils/auth";
import { Link } from "react-router-dom";
import "./CustomerProject.scss";
import BasicLayout from "../layout/BasicLayout";
import { getProjects } from "../utils/projects";
import NewProjectForm from "../components/NewProjectForm";

export default class CustomerProject extends Component {
  state = {
    projects: [],
    filteredProjects: [],
    user: getCustomer()
  };

  filterProject = data => {
    var matchResult = data.filter(
      project => project.customer === this.state.user.id
    );
    this.setState({ filteredProjects: matchResult });
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    getProjects()
      .then(project => {
        this.setState({ projects: project.data });
        this.filterProject(project.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <BasicLayout>
        <>
          <h1 className="customer-project-title">Your Projects</h1>
          <div className='main-container'>
            <div className="CusPro">
              {this.state.filteredProjects.map(project => (
                <div className="CusProBox">
                  <div className="CusProBoxDiv">
                    <h2>{project.title}</h2>
                    <p>Quotes received: {project.quotes.length}</p>
                  </div>
                  <Link to={`/customer/projects/${project._id}`}>
                    <button>Check quotes</button>
                  </Link>
                </div>
              ))}
            </div>
            <NewProjectForm fetchData={this.fetchData} />
          </div>
        </>
      </BasicLayout>
    );
  }
}
