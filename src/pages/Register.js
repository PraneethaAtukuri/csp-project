import React from "react";
import loginImg from "../assets/login.svg";
import "../styles/Register.css";
import BaseHOC from '../layouts/BaseHOC';


export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="drop">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="Firstname">First Name</label>
              <input type="text" name="firstname" placeholder="firstname" />
            </div>
            <div className="form-group">
              <label htmlFor="LastName">Last Name</label>
              <input type="text" name="lastname" placeholder="lastname" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
export default BaseHOC(Register);