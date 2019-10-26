import React, { Component } from 'react'
import { getUser, logout } from '../utils/auth'
import { Link } from "react-router-dom"
import emilogo from "../images/emilogo3"
import "./ProNav.scss"

export default class CusNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: getUser()
        }
        this.logoutUser = this.logoutUser.bind(this)
    }

    logoutUser() {
        logout()
        this.setState({ user: null });
        this.props.history.push(`/`)
    }

    render() {
        return (
            <div className="ProNav">
                <Link to={`/`}><img src={emilogo} alt="" /></Link>
                <div className="ProNav-Conditional">
                    <Link to={`/customer/signup`}>Cus Sign Up</Link>
                    <Link to={`/customer/projects`}>Cus Project</Link>
                    <Link to={`/customer/login`}>Cus Log in</Link>
                </div>
            </div>
        )
    }
}
