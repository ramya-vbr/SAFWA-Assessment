/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Button, Input } from "antd";
import logingradient from "../../images/logingradient.jpg";
import logo from "../../images/logo.png";
import { useHistory } from "react-router-dom";
import "./login.css";

function login() {
  let history = useHistory();
  return (
      <div className="login-container">
          <div className="image-container">
            <img src={logingradient} alt="login" className="login-gradient" />
            <div className="footer-text">
              <h3>SAFWA Global Venture</h3>
              <p>Careline System</p>
            </div>
          </div>
          <div className="loginContent-container">
            <img src={logo} alt="logo" className="logo-style" />
            <div className="safwa-text">SAFWA CARELINE</div>
            <h3 className="welcome-text">Welcome back!</h3>
            <span className="signin-text">Sign-In to Continue</span>
            <p className="user-text">UserId/Email*</p>
            <Input placeholder="UserId/Email*" className="first-input" />
            <Input placeholder="UserId/Email*" className="second-input" />
            <Button
              type="primary"
              className="login-btn-style"
              onClick={() => history.push("/dashboard")}
              block
            >
              Log In
            </Button>
            <div className="forgot-text">Forgot password?</div>
            <p className="logo-footer">Powered By Schinkels Technik</p>
        </div>
      </div>
  );
}

export default login;
