import React, { Component } from "react";
import "./CustomerSignUp.scss";
import axios from "axios";
import { setUser } from "../utils/auth"

class CustomerSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      mobile: "",
      counter: 0,
      title: "",
      category: "",
      description: "",
      loginPassword: "",
      loginEmail: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.inputEvent = this.inputEvent.bind(this);
    this.loginHandle = this.loginHandle.bind(this);
  }

  inputEvent = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const {
      mobile,
      email,
      firstname,
      lastname,
      password,
      category,
      description,
      title,
      loginPassword,
      loginEmail
    } = this.state;

    if (this.state.counter === 1) {
      axios({
        method: "POST",
        data: {
          email,
          firstname,
          lastname,
          password,
          mobile
        },
        url: "http://localhost:5000/api/customer/signup"
      })
        .then((response) => {
          axios({
            method: "POST",
            data: {
              category,
              description,
              title,
              customer: response.data.user._id
            },
            url: "http://localhost:5000/api/projects/create"
          })
            .then(res => {
              this.props.history.push("/");
            })
            .catch(err => {
              console.log(err);
            })
          localStorage.setItem('user', JSON.stringify(response.data.user))
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios({
        method: "POST",
        data: {
          email: loginEmail,
          password: loginPassword
        },
        url: "http://localhost:5000/api/customer/login"
      })
        .then((response) => {
          debugger
          axios({
            method: "POST",
            data: {
              category,
              description,
              title,
              customer: response.data.id
            },
            url: "http://localhost:5000/api/projects/create"
          })
            .then(res => {
              console.log("project saved");
              this.props.history.push("/");
            })
            .catch(err => {
              console.log(err);
            });
          localStorage.setItem('user', JSON.stringify(response.data))
        })
        .catch(err => {
          console.log(err)
        });
    }
  };

  handleNext = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  handleBack = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  loginHandle = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <div className="customer-container">
        <form onSubmit={this.handleSubmit} className="customer-form">
          {this.state.counter === 0 && (
            <>
              <input
                required
                onChange={this.inputEvent}
                type="text"
                value={this.state.title}
                name="title"
                placeholder="Enter Title"
              />
              <input
                required
                onChange={this.inputEvent}
                type="text"
                value={this.state.category}
                name="category"
                placeholder="Enter category"
              />
              <input
                required
                onChange={this.inputEvent}
                type="text"
                value={this.state.description}
                name="description"
                placeholder="Enter description"
              />
              <button onClick={this.handleNext}>next</button>
            </>
          )}
          {this.state.counter === 1 && (
            <>
              <button onClick={this.loginHandle}>have a account?</button>
              <input
                required
                onChange={this.inputEvent}
                type="text"
                value={this.state.email}
                name="email"
                placeholder="Enter Email"
              />
              <input
                required
                onChange={this.inputEvent}
                type="text"
                value={this.state.password}
                name="password"
                placeholder="password"
              />
              <input
                required
                onChange={this.inputEvent}
                type="text"
                value={this.state.firstname}
                name="firstname"
                placeholder="firstname"
              />
              <input
                required
                onChange={this.inputEvent}
                type="text"
                value={this.state.lastname}
                name="lastname"
                placeholder="lastname"
              />
              <input
                required
                onChange={this.inputEvent}
                type="text"
                value={this.state.mobile}
                name="mobile"
                placeholder="mobile"
              />
              <button onClick={this.handleBack}>back</button>
              <button type="submit">Submit</button>
            </>
          )}
          {this.state.counter === 2 && (
            <>
              <input
                required
                onChange={this.inputEvent}
                type="text"
                value={this.state.loginEmail}
                name="loginEmail"
                placeholder="Enter Email"
              />
              <input
                required
                onChange={this.inputEvent}
                type="text"
                value={this.state.loginPassword}
                name="loginPassword"
                placeholder="password"
              />
              <button onClick={this.handleBack}>back</button>
              <button type="submit">Submit</button>
            </>
          )}
        </form>
      </div>
    );
  }
}

export default CustomerSignUp;
