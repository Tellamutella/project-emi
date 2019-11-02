import React, { Component } from 'react'
import { login, getCustomer } from "../utils/auth"
import BasicLayout from '../layout/BasicLayout'
import "./ProLogin.scss";

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
                .then((response) => {
                    this.props.history.push('/')
                })
                .catch((error) => {

                })
        }
    }
    render() {
        return (
            <BasicLayout>
                <div className="prologin-container">
                    <form onSubmit={this.submitHandler} className="prologin-form">
                        <h3>Welcome Back!</h3>
                        <h3>Login As A Customer</h3>
                        <label>Email</label>
                        <input required type="text" name="email" value={this.state.email} onChange={(e) => this.changeHandler(e)} />

                        <label>Password</label>
                        <input required type="text" name="password" value={this.state.password} onChange={(e) => this.changeHandler(e)} />
                        <button type="submit" Value="Submit">Login</button>
                    </form>
                </div>
            </BasicLayout>
        )
    }
}
