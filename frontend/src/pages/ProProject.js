import React, { Component } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import ProjectDetails from "./professional/ProjectDetails";
import "./ProProject.scss";

export default class ProProjects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      loading: true
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://localhost:5000/api/projects"
    })
      .then(res => {
        this.setState({ projects: res.data });
      })
      .catch(err => {
        this.setState(err);
      });
  }

  render() {
    return (
      <div className="pro-project-container">
        <div className="project-side-bar">
          {this.state.projects.map(project => (
            <div className="side-bar-item">
              <h2>Title: {project.title}</h2>
              <Link to={`/professional/projects/details/${project._id}`}>
                <button>check detail</button>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <Route
            path="/professional/projects/details/:id"
            render={props => (
              <ProjectDetails {...props} projects={this.state.projects} />
            )}
          />
        </div>
      </div>
    );
  }
}
