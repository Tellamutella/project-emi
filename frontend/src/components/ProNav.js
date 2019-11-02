import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout, getProfessional, getCustomer } from "../utils/auth";
import { withRouter } from "react-router";
import "./ProNav.scss";
import emilogo from "../images/emilogo5";
import emilogomobile from "../images/emilogo5"
import burgericon from "../images/burger-menu.png"
import crossicon from "../images/burger-menu-cross.png"
import { bubble as Menu } from 'react-burger-menu'

class ProNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      professional: getProfessional(),
      customer: getCustomer(),
      isDesktop: false
    };
    this.logoutUser = this.logoutUser.bind(this);
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  logoutUser() {
    logout()
      .then(() => {
        this.setState({ professional: null, customer: null });
      })
      .then(() => {
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error)
      })

  }

  showSettings(event) {
    event.preventDefault();
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 750 });
  }
  render() {
    // console.log(this.props.customer)
    // console.log(getCustomer())
    const isDesktop = this.state.isDesktop;
    {
      if (this.state.professional) {
        return (
          <>
            {isDesktop ? (
              <div className="ProNav">
                <Link to={`/`}>
                  <img src={emilogo} alt="" />
                </Link>
                <div className="ProNav-Conditional">
                  <Link to={`/professional/projects`}>All Projects</Link>
                  <p onClick={this.logoutUser}>Logout</p>
                </div>
              </div>
            ) :
              (
                <div className="ProNav-mobile">
                  <Link to={`/`}>
                    <img className="logo-mobile" src={emilogomobile} alt="" />
                  </Link>
                  < Menu right pageWrapId={"page-wrap"} customBurgerIcon={<img src={burgericon} />} customCrossIcon={<img src={crossicon} />}>
                    <Link to={`/professional/projects`}>All Projects</Link>
                    <p onClick={this.logoutUser}>Logout</p>
                  </Menu>
                </div>
              )}
          </>


        );
      } else if (this.state.customer) {
        return (
          <>
            {isDesktop ? (
              <div className="ProNav">
                <Link to={`/`}>
                  <img src={emilogo} alt="" />
                </Link>
                <div className="ProNav-Conditional">
                  <Link to={`/customer/projects`}>Your Projects</Link>
                  <p onClick={this.logoutUser}>Logout</p>
                </div>
              </div>
            ) : (
                <div className="ProNav-mobile">
                  <Link to={`/`}>
                    <img className="logo-mobile" src={emilogomobile} alt="" />
                  </Link>
                  < Menu right pageWrapId={"page-wrap"} customBurgerIcon={<img src={burgericon} />} customCrossIcon={<img src={crossicon} />}>
                    <Link to={`/customer/projects`}>Your Projects</Link>
                    <p onClick={this.logoutUser}>Logout</p>
                  </Menu>
                </div>
              )}
          </>

        );
      } else {
        return (
          <>
            {isDesktop ? (
              <div className="ProNav">
                <Link to={`/`}>
                  <img src={emilogo} alt="" />
                </Link>
                <div className="ProNav-Conditional">
                  <Link to={`/customer/signup`}>Quote Request</Link>
                  <Link to={`/customer/login`}>Customer Login</Link>
                  <Link to={`/professional/login`}>Pro Login</Link>
                  <Link to={`/professional/signup`}>Join as A Pro</Link>
                </div>
              </div>
            ) : (
                <div className="ProNav-mobile">
                  <Link to={`/`}>
                    <img className="logo-mobile" src={emilogomobile} alt="logo" />
                  </Link>
                  < Menu right pageWrapId={"page-wrap"} customBurgerIcon={<img src={burgericon} />} customCrossIcon={<img src={crossicon} />}>
                    <Link className="menu-item" to={`/customer/signup`}>Quote Request</Link>
                    <Link className="menu-item" to={`/customer/login`}>Customer Login</Link>
                    <Link className="menu-item" to={`/professional/login`}>Pro Login</Link>
                    <Link className="menu-item" to={`/professional/signup`}>Join As Pro</Link>
                  </Menu>
                </div>
              )
            }
          </>
        );
      }
    }
  }
}

export default withRouter(ProNav);
