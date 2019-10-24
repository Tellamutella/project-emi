import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { logout, getUser } from "../utils/auth"
import { withRouter } from "react-router"
import axios from "axios"
import "./ProNav.scss"
import emilogo from "../images/emilogo2"

class ProNav extends Component {
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
                    <Link to={`/professional/signup`}>Pro Sign Up</Link>
                    <Link to={`/professional/login`}>Pro Login</Link>
                    <Link to={`/professional/projects`}>All Projects</Link>
                    <p onClick={this.logoutUser}>LogOut</p>
                </div>
            </div>
        )
    }
}

export default withRouter(ProNav);