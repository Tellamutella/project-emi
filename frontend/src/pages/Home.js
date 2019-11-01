import "./Home.scss";
import BasicLayout from "../layout/BasicLayout";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import dogImg from "../images/undraw_team_spirit_hrr4.svg";
import qs from "qs"; 
debugger
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Customer",
      input: "Home Services"
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleSelect = event => this.setState({ user: event.target.value });
  handleInput = event => this.setState({ input: event.target.value });

  componentDidMount() {
    if(this.props.location.search) {
      var redirect = qs.parse(this.props.location.search,  { ignoreQueryPrefix: true }).redirectUrl
      this.props.history.push(redirect)
    }
  }
  render() {
    return (
      <BasicLayout>
        <div className="home-container">
          <div className="text-container">
            <h1>I am a</h1>
            <select
              className="selection"
              value={this.state.user}
              onChange={this.handleSelect}
            >
              <option value="Customer">Customer</option>
              <option value="Professional">Professional</option>
            </select>
            {this.state.user === "Professional" ? (
              <>
                <h1> and im in the</h1>
                <select
                  className="selection"
                  value={this.state.input}
                  onChange={this.handleInput}
                >
                  <option value="IT">IT</option>
                  <option value="Pet">Pet</option>
                  <option value="Home Services">Home Services</option>
                  <option value="Fitness">Fitness</option>
                </select>
                <h1>Field</h1>

                <Link
                  className="home-btn"
                  to={{
                    pathname: "/professional/signup",
                    data: this.state.input
                  }}
                >
                  Register as a Pro Now!
                </Link>
              </>
            ) : (
              <>
                <h1> and im looking for</h1>
                <select
                  className="selection"
                  value={this.state.input}
                  onChange={this.handleInput}
                >
                  <option value="IT">IT</option>
                  <option value="Pet">Pet</option>
                  <option value="Home Services">Home Services</option>
                  <option value="Fitness">Fitness</option>
                </select>
                <h1>Services</h1>

                <Link
                  className="home-btn"
                  to={{
                    pathname: "/customer/signup",
                    data: this.state.input
                  }}
                >
                  Get a quote
                </Link>
              </>
            )}
          </div>
          <img className="dogImg" src={dogImg} />
        </div>
      </BasicLayout>
    );
  }
}
