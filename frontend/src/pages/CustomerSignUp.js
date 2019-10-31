import React, { Component } from "react";
import "./CustomerSignUp.scss";
import axios from "axios";
import BasicLayout from "../layout/BasicLayout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
      location: "",
      category: props.location.data || "Home Services",
      description: "",
      loginPassword: "",
      loginEmail: "",
      startDate: new Date()
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
      startDate,
      mobile,
      email,
      firstname,
      lastname,
      password,
      category,
      description,
      title,
      loginPassword,
      loginEmail,
      location
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
        url: `${process.env.REACT_APP_BASEURL}/api/customer/signup`
      })
        .then(response => {
          localStorage.setItem("customer", JSON.stringify(response.data));
          return axios({
            method: "POST",
            data: {
              category,
              description,
              title,
              customer: response.data.id,
              startDate,
              location
            },
            url: `${process.env.REACT_APP_BASEURL}/api/projects/create`
          })
            .then(project => {
              this.props.history.push("/");
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          // to do: handle error (also email already taken)
          console.log(err);
        });
    } else {
      axios({
        method: "POST",
        data: {
          email: loginEmail,
          password: loginPassword
        },
        url: `${process.env.REACT_APP_BASEURL}/api/customer/login`
      })
        .then(response => {
          axios({
            method: "POST",
            data: {
              category,
              description,
              title,
              customer: response.data.id,
              startDate,
              location
            },
            url: `${process.env.REACT_APP_BASEURL}/api/projects/create`
          })
            .then(res => {
              console.log("project saved");
              this.props.history.push("/");
            })
            .catch(err => {
              console.log(err);
            });
          localStorage.setItem("customer", JSON.stringify(response.data));
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  handleSelect = event => this.setState({ category: event.target.value });

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

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    console.log(this.props.location);
    return (
      <BasicLayout>
        <div className="customer-container">
          <form onSubmit={this.handleSubmit} className="customer-form">
            {this.state.counter === 0 && (
              <>
                <div className="form-input-container">
                  <label>Title</label>
                  <input
                    required
                    onChange={this.inputEvent}
                    type="text"
                    value={this.state.title}
                    name="title"
                    placeholder="Enter Title"
                  />
                </div>
                <div className="form-input-container">
                  <label>Location</label>
                  <input
                    required
                    onChange={this.inputEvent}
                    type="text"
                    value={this.state.location}
                    name="location"
                    placeholder="Enter location"
                  />
                </div>
                <div className="form-input-container">
                  <label>Experts you are looking for</label>
                  <select
                    value={this.state.category}
                    onChange={this.handleSelect}
                  >
                    <option value="IT">IT</option>
                    <option selected value="Home Services">
                      Home Services
                    </option>
                    <option value="Pet">Pet</option>
                    <option value="Fitness">Fitness</option>
                  </select>
                </div>
                <div className="form-input-container">
                  <label>Description</label>
                  <textarea
                    required
                    onChange={this.inputEvent}
                    type="text"
                    value={this.state.description}
                    name="description"
                    placeholder="Enter description"
                  />
                </div>
                <label>Pick a date</label>
                <DatePicker
                  className="date-picker"
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  minDate={new Date()}
                />
                <button className="btn-customer-form" onClick={this.handleNext}>
                  next
                </button>
              </>
            )}
            {this.state.counter === 1 && (
              <>
                <button
                  className="btn-customer-form"
                  onClick={this.loginHandle}
                >
                  have a account?
                </button>

                <div className="form-input-signup">
                  <label>Email</label>
                  <input
                    required
                    onChange={this.inputEvent}
                    type="text"
                    value={this.state.email}
                    name="email"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-input-signup">
                  <label>Firstname</label>
                  <input
                    required
                    onChange={this.inputEvent}
                    type="text"
                    value={this.state.firstname}
                    name="firstname"
                    placeholder="firstname"
                  />
                </div>
                <div className="form-input-signup">
                  <label>Lastname</label>
                  <input
                    required
                    onChange={this.inputEvent}
                    type="text"
                    value={this.state.lastname}
                    name="lastname"
                    placeholder="lastname"
                  />
                </div>
                <div className="form-input-signup">
                  <label>Mobile</label>
                  <input
                    required
                    onChange={this.inputEvent}
                    type="text"
                    value={this.state.mobile}
                    name="mobile"
                    placeholder="mobile"
                  />
                </div>
                <div className="form-input-signup">
                  <label>Password</label>
                  <input
                    required
                    onChange={this.inputEvent}
                    type="Password"
                    value={this.state.password}
                    name="password"
                    placeholder="password"
                  />
                </div>
                <div className="btn-container">
                  <button onClick={this.handleBack}>back</button>
                  <button type="submit">Submit</button>
                </div>
              </>
            )}
            {this.state.counter === 2 && (
              <>
                <div className="form-input-signup">
                  <label>Lastname</label>
                  <input
                    required
                    onChange={this.inputEvent}
                    type="text"
                    value={this.state.loginEmail}
                    name="loginEmail"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-input-signup">
                  <label>Lastname</label>
                  <input
                    required
                    onChange={this.inputEvent}
                    type="text"
                    value={this.state.loginPassword}
                    name="loginPassword"
                    placeholder="password"
                  />
                </div>
                <div className="btn-container">
                  <button onClick={this.handleBack}>back</button>
                  <button type="submit">Submit</button>
                </div>
              </>
            )}
          </form>
        </div>
      </BasicLayout>
    );
  }
}

export default CustomerSignUp;
