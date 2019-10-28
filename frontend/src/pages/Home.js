import React, { Component } from "react";
import "../Home.scss";
import dogwalker from "../images/dogwalker";
import dogsitter from "../images/dogsitter.svg";
import personaltrainer from "../images/personaltrainer.svg"
import BasicLayout from "../layout/BasicLayout";
const Home = () => {

  debugger
  return (
    <BasicLayout>
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
    </BasicLayout>
  )
}

export default Home;
