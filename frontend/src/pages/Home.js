import React, { Component } from "react";
import "../Home.scss";
import dogwalker from "../images/dogwalker";
import dogsitter from "../images/dogsitter.svg";
import personaltrainer from "../images/personaltrainer.svg"

const Home = () => {


  return (
    <>
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
    </>
  );

}

export default Home;
