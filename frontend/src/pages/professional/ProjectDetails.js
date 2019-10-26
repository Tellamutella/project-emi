import React, { Component } from "react";
import axios from "axios";
import { getUser } from "../../utils/auth";
import Prodetail from "./Prodetail";
export default class ProjectDetails extends Component {
  state = {
    project: null,
    hourlyPrice: "",
    description: "",
    user: getUser(),
    quote: null
  };
  componentDidMount() {
    this.fetchProjectDetails();
  }

  fetchProjectDetails() {
    axios({
      method: "GET",
      url: `http://localhost:5000/api/projects/${this.props.match.params.id}`
    })
      .then(res => {
        let check = res.data.quotes.filter(
          element => element.professional === this.state.user.id
        );
        if (check.length > 0) {
          this.setState({
            project: res.data,
            quote: check[0]
          });
        } else {
          this.setState({
            project: res.data,
            hourlyPrice: "",
            description: "",
            quote: null
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id != this.props.match.params.id)
      this.fetchProjectDetails();
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sumbitHandler = e => {
    e.preventDefault();
    const userId = this.state.user.id;
    const projectId = this.state.project._id;
    const { hourlyPrice, description } = this.state;
    axios({
      method: "POST",
      data: {
        userId,
        projectId,
        hourlyPrice,
        description
      },
      url: "http://localhost:5000/api/quotes/create"
    })
      .then(response => {
        this.fetchProjectDetails();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="project-detail-container">
        {this.state.project ? (
          <>
            <Prodetail project={this.state.project} />

            {this.state.quote ? (
              <>
                <h1>{this.state.quote.hourlyPrice} </h1>
                <h1>im here</h1>
              </>
            ) : (
              <form onSubmit={this.sumbitHandler}>
                <input
                  placeholder="Price per hour"
                  onChange={this.inputHandler}
                  name="hourlyPrice"
                  value={this.state.hourlyPrice}
                  type="text"
                />
                <input
                  placeholder="Description"
                  onChange={this.inputHandler}
                  name="description"
                  value={this.state.description}
                  type="text"
                />
                <button type="submit"> Sumbit Quote</button>
              </form>
            )}
          </>
        ) : (
          <div className="loading"></div>
        )}
      </div>
    );
  }
}

// export default function ProjectDetails(props) {
//   const projectId = props.match.params.id;
//   let filterproject = props.projects.filter(
//     project => project._id === projectId
//   )[0];
//     debugger
//   return (
//     <>
//     {props.projects.length ?
//       <div>
//       <h1>{filterproject.title}</h1>
//     </div>:
//     <h1>Loading</h1>
//     }
//     </>
//   );
// }
