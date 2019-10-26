import React, { Component } from 'react'
import { login } from "../utils/auth"

export default class CustomerLogIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }

        this.changeHandler = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        this.submitHandler = (e) => {
            e.preventDefault()
            login(this.state.email, this.state.password)
            this.props.history.push(`/`)
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
                    <button type="submit" Value="Submit">submit</button>
                </form>
            </div>
        )
    }
}
