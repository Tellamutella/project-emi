import React, { Component } from "react";
import { newProject, getProjects } from "../utils/projects";
import "./NewProjectForm.scss";
import DatePicker from "react-datepicker";
import { getCustomer } from "../utils/auth";

export default class NewProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "Home Services",
      description: "",
      location: "",
      startDate: new Date(),
      customer: getCustomer()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    newProject(
      this.state.category,
      this.state.description,
      this.state.title,
      this.state.customer.id,
      this.state.startDate,
      this.state.location
    );
    debugger
    this.props.fetchData();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  dateChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleSelect = e => this.setState({ category: e.target.value });

  render() {
    return (
      <div className="form-container">
        <h3>Add a New Project</h3>
        <form className="NewProjectForm" onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label>Title</label>
            <input
              required
              onChange={this.handleChange}
              value={this.state.title}
              name="title"
              placeholder="Enter title"
            />
          </div>
          <div className="input-container">
            <label>Experts you are looking for</label>
            <select value={this.state.category} onChange={this.handleSelect}>
              <option value="IT">IT</option>
              <option selected value="Home Services">
                Home Services
              </option>
              <option value="Pet">Pet</option>
              <option value="Fitness">Fitness</option>
            </select>
          </div>
          <div className="input-container">
            <label>Description</label>
            <textarea
              required
              onChange={this.handleChange}
              type="text"
              value={this.state.description}
              name="description"
              placeholder="Enter description"
            />
          </div>
          <div className="input-container">
            <label>Location</label>
            <input
              required
              onChange={this.handleChange}
              type="text"
              value={this.state.location}
              name="location"
              placeholder="Enter location"
            />
          </div>
          <label>Pick a date</label>
          <DatePicker
            className="date-picker"
            selected={this.state.startDate}
            onChange={this.dateChange}
            minDate={new Date()}
            name="startDate"
          />
          <button className="form-btn" type="submit" Value="Submit">
            Add Project
          </button>
        </form>
      </div>
    );
  }
}
