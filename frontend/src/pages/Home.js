import React, { Component } from "react";
import "../Home.scss";
import dogwalker from "../images/dogwalker";
import dogsitter from "../images/dogsitter.svg";
import personaltrainer from "../images/personaltrainer.svg"
import ProNav from "../components/ProNav"
import CusNav from "../components/CusNav"

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ["professional", "customer"]
    };
  }

  render() {
    return (
      <>
        <ProNav />
        <CusNav />
        <div className="home">
          <div className="homeColRow">
            <h1>
              I am a<span></span>
              <select className="selection">
                <option value="Customer">Customer</option>
                <option value="Professional">Professional</option>
              </select>
              and im in the IT field
        </h1>
            <button>Get A Quote</button>
          </div>
          <img src={dogsitter} alt="" />
        </div>

        <div>
          <h1 className="wrapper typo">I am a</h1>
          {this.state.users.map((user) =>
            <ul>
              <li>{user}</li>
            </ul>
          )}
        </div>
      </>
    );
  }
}
