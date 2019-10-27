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
      loading: true,
      isDesktop: false
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
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

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 500 });
  }

  render() {
    const isDesktop = this.state.isDesktop;
    return (
      <>
        {isDesktop ? (
          <div className="pro-project-container">
            <div className="project-side-bar">
              {this.state.projects.map(project => (
                <div className="side-bar-item">
                  <p>{project.title}</p>
                  <p>{project.category}</p>
                  <Link
                    className="project-detail-button"
                    to={`/professional/projects/details/${project._id}`}
                  >
                    check me out
                  </Link>
                </div>
              ))}
            </div>
            <Route
              path="/professional/projects/details/:id"
              render={props => (
                <ProjectDetails {...props} projects={this.state.projects} />
              )}
            />
          </div>
        ) : (
          <div className="project-mobile">
            {this.state.projects.map(project => (
              <div className="project-mobile-item">
                <h2>Title: {project.title}</h2>
                <h3>category: {project.category}</h3>
                <Link
                  className="project-detail-button"
                  to={`/professional/projects/details/m/${project._id}`}
                >
                  check me out
                </Link>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }
}
