import React, { Component } from 'react'
import { Link, Route } from "react-router-dom"
import "../Home.scss";
import dogwalker from "../images/dogwalker"

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <h1>
          I am a <span></span>
          <select className="selection">
            <option value="Customer">Customer</option>
            <option value="Professional">Professional</option>
          </select>and im in the IT field
        </h1>
        <img src={dogwalker} alt="" />
        <button>Get A Quote Now!</button>
      </div>
    );
  }
}
