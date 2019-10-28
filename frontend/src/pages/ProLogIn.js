import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import { prologin } from "../utils/auth"
import BasicLayout from "../layout/BasicLayout";

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
      debugger
      prologin(this.state.email, this.state.password)
        .then((response) => {
          debugger
          this.props.history.push('/');
        })
        .catch((error) => {
          // handle login error
        })
      // axios({
      //   url: "http://localhost:5000/api/professional/login",
      //   method: "POST",
      //   data: qs.stringify(this.state),
      //   headers: {
      //     "Content-Type": "application/x-www-form-urlencoded"
      //   }
      // })
      //   .then(pro => {
      //     localStorage.setItem("user", JSON.stringify(pro.data));
      //     this.props.history.push(`/`);
      //     console.log(pro.data);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    };
  }
  render() {
    return (
      <BasicLayout>
        <div>
          <form onSubmit={this.submitHandler}>
            <label>email</label>
            <input
              required
              type="text"
              name="email"
              value={this.state.email}
              onChange={e => this.changeHandler(e)}
            />

            <label>password</label>
            <input
              required
              type="text"
              name="password"
              value={this.state.password}
              onChange={e => this.changeHandler(e)}
            />

            <button type="sumbit" value="Submit">
              Submit
          </button>
          </form>
        </div>
      </BasicLayout>
    );
  }
}
