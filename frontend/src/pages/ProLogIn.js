import React, { Component } from "react";
import { prologin } from "../utils/auth";
import BasicLayout from "../layout/BasicLayout";
import "./ProLogin.scss";

export default class ProLogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.changeHandler = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.submitHandler = event => {
      event.preventDefault();
      debugger;
      prologin(this.state.email, this.state.password)
        .then(response => {
          debugger;
          this.props.history.push("/");
        })
        .catch(error => {
          // handle login error
        });
    };
  }
  render() {
    return (
      <BasicLayout>
        <div className="prologin-container">
          <form onSubmit={this.submitHandler} className="prologin-form">
            <h3>Welcome Back!</h3>
            <h3>Signin as a Professional</h3>
            <label>Email</label>
            <input
              required
              type="text"
              name="email"
              value={this.state.email}
              onChange={e => this.changeHandler(e)}
            />

            <label>Password</label>
            <input
              required
              type="text"
              name="password"
              value={this.state.password}
              onChange={e => this.changeHandler(e)}
            />

            <button type="sumbit" value="Submit">
              Login
            </button>
          </form>
        </div>
      </BasicLayout>
    );
  }
}
