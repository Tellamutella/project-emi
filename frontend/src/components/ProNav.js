import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { logout, getProfessional, getCustomer } from "../utils/auth"
import { withRouter } from "react-router"
import axios from "axios"
import "./ProNav.scss"
import emilogo from "../images/emilogo3"
import ProSignUp from '../pages/ProSignUp'

class ProNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            professional: getProfessional(),
            customer: getCustomer()
        }
        this.logoutUser = this.logoutUser.bind(this)
    }

    logoutUser() {
        logout()
        this.setState({
            professional: null,
            customer: null
        });
        this.props.history.push('/')
    }

    render() {

        {
            if (this.state.professional) {
                return (
                    <div className="ProNav">
                        <Link to={`/`}><img src={emilogo} alt="" /></Link>
                        <div className="ProNav-Conditional">
                            <Link to={`/professional/projects`}>All Projects</Link>
                            <Link to={`/professional/profile`}>pro profile</Link>
                            <p onClick={this.logoutUser}>LogOut</p>
                        </div>
                    </div>
                )
            }
            else if (this.state.customer) {
                return (
                    <div className="ProNav">
                        <Link to={`/`}><img src={emilogo} alt="" /></Link>
                        <div className="ProNav-Conditional">
                            <Link to={`/customer/projects`}>Cus Project</Link>
                            <p onClick={this.logoutUser}>LogOut</p>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div className="ProNav">
                        <Link to={`/`}><img src={emilogo} alt="" /></Link>
                        <div className="ProNav-Conditional">
                            <Link to={`/professional/signup`}>Pro Sign Up</Link>
                            <Link to={`/professional/login`}>Pro Login</Link>
                            <Link to={`/customer/signup`}>Cus Sign Up</Link>
                            <Link to={`/customer/login`}>Cus Log in</Link>
                        </div>
                    </div>)
            }
        }
    }
}

export default withRouter(ProNav);