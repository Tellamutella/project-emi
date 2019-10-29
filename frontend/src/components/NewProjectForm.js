import React, { Component } from 'react'
import { newProject } from '../utils/projects'
import "./NewProjectForm.scss"

export default class NewProjectForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            category: "",
            description: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        newProject(this.state.title, this.state.category, this.state.description)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSelect = e => this.setState({ category: e.target.value });

    render() {
        return (
            <div>
                <form className="NewProjectForm" onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input required onChange={this.handleChange} value={this.state.title} name="title" placeholder="Enter title" />

                    <label>Experts you are looking for</label>
                    <select value={this.state.category} onChange={this.handleSelect}>
                        <option value="IT">IT</option>
                        <option selected value="Home Services">Home Services</option>
                        <option value="Pet">Pet</option>
                        <option value="Fitness">Fitness</option>
                    </select>

                    <label>Description</label>
                    <input required onChange={this.handleChange} value={this.state.description} name="description" placeholder="Enter descriptions" />

                    <button type="submit" Value="Submit">Submit</button>
                </form>
            </div>
        )
    }
}

