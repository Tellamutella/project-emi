import "./Home.scss";
import dogsitter from "../images/dogsitter.svg";
import BasicLayout from "../layout/BasicLayout";
import React, { Component } from "react";

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
                  <button>Get A Quote</button>
                </>
              )}
          </div>
        </div>
      </BasicLayout>
    );
  }
}
