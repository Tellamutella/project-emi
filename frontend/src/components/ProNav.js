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
    }

    render() {
        // console.log(this.props.customer)
        // console.log(getCustomer())
        {
            if (this.props.professional) {
                return (
                    <div className="ProNav">
                        <Link to={`/`}><img src={emilogo} alt="" /></Link>
                        <div className="ProNav-Conditional">
                            <Link to={`/professional/projects`}>All Projects</Link>
                            <Link to={`/professional/profile`}>pro profile</Link>
                            <p onClick={this.props.logoutUser}>LogOut</p>
                        </div>
                    </div>
                )
            }
            else if (this.props.customer) {
                return (
                    <div className="ProNav">
                        <Link to={`/`}><img src={emilogo} alt="" /></Link>
                        <div className="ProNav-Conditional">
                            <Link to={`/customer/projects`}>Cus Project</Link>
                            <p onClick={this.props.logoutUser}>LogOut</p>
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