import React, { Component } from 'react'
import axios from "axios"
import qs from "qs"

export default class ProSignUp extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            mobile: "",
        }

        this.submitHandler = (event) => {
            event.preventDefault()
            axios({
                url: "http://localhost:5000/api/professional/signup",
                method: "POST",
                data: qs.stringify(this.state),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then((res) => {
                    this.props.history.push('/professional/login')
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        this.changeHandler = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>email</label>
                    <input required type="text" name="email" value={this.state.email} onChange={(e) => this.changeHandler(e)} />

                    <label>password</label>
                    <input required type="text" name="password" value={this.state.password} onChange={(e) => this.changeHandler(e)} />

                    <label>firstname</label>
                    <input required type="text" name="firstName" value={this.state.firstName} onChange={(e) => this.changeHandler(e)} />

                    <label>lastname</label>
                    <input required type="text" name="lastName" value={this.state.lastName} onChange={(e) => this.changeHandler(e)} />

                    <label>mobile</label>
                    <input required type="text" name="mobile" value={this.state.mobile} onChange={(e) => this.changeHandler(e)} />

                    <button type="sumbit" value="Submit">Submit</button>
                </form>

            </div>
        )
    }
}
