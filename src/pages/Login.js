import React from "react";
import loginImg from "../assets/login.svg";
import "../styles/Login.css";
import BaseHOC from '../layouts/BaseHOC';

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="drop">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
export default BaseHOC(Login)