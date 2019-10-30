import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import BasicLayout from "../layout/BasicLayout";
import "./ProSignUp.scss";

export default class ProSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      mobile: "",
      category: props.location.data || "Home Services"
    };

    this.handleSelect = event =>
      this.setState({ category: event.target.value });

    this.submitHandler = event => {
      event.preventDefault();
      axios({
        url: "http://localhost:5000/api/professional/signup",
        method: "POST",
        data: qs.stringify(this.state),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
        .then(res => {
          this.props.history.push("/professional/login");
        })
        .catch(err => {
          console.log(err);
        });
    };

    this.changeHandler = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
  }
  render() {
    return (
      <BasicLayout>
        <div className="prosignup-container">
          <form onSubmit={this.submitHandler} className="prosignup-form">
            <div className="signup-input">
              <label>Email</label>
              <input
                required
                type="text"
                name="email"
                value={this.state.email}
                onChange={e => this.changeHandler(e)}
              />
            </div>
            <div className="signup-input-name">
              <div className="signup-input">
                <label>Firstname</label>
                <input
                  required
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={e => this.changeHandler(e)}
                />
              </div>
              <div className="signup-input">
                <label>Lastname</label>
                <input
                  required
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={e => this.changeHandler(e)}
                />
              </div>
            </div>
            <div className="signup-input">
              <label>Mobile</label>
              <input
                required
                type="text"
                name="mobile"
                value={this.state.mobile}
                onChange={e => this.changeHandler(e)}
              />
            </div>
            <div className="signup-input">
              <label>Password</label>
              <input
                required
                type="text"
                name="password"
                value={this.state.password}
                onChange={e => this.changeHandler(e)}
              />
            </div>
            <label>Select Your Expertise</label>
            <select value={this.state.category} onChange={this.handleSelect}>
              <option value="IT">IT</option>
              <option selected value="Home Services">
                Home Services
              </option>
              <option value="Pet">Pet</option>
              <option value="Fitness">Fitness</option>
            </select>
            <button type="sumbit" value="Submit">
              Submit
            </button>
          </form>
        </div>
      </BasicLayout>
    );
  }
}
