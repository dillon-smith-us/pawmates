import React from "react";
import Logo from "../Images/PawMates.png";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignupForm from '../components/SignupForm';
// import LoginForm from '../components/LoginForm';
import Corgi from "../Images/corgilove.jpg";


function Landing () {
  return (
    <div id="/">
      <div className= "d-flex justify-content-between align-items-center px-5">
        <img alt="logo" src={Logo} width="250" height="100" className="d-inline-block align-top"/>
        <Link to="/LoginForm"> <button type="button" className="btn btn-outline-dark main-btn">Login</button></Link>
      </div>
      {/* main body container */}
      <div className="d-flex justify-content-center align-items-center py-3">
        <div className="d-inline-flex flex-column align-items-center ">
          <h2 className="px-5 text-center">A place for your dog to find their next playmate.</h2>
          <Link to="/SignupForm"><button type="button" className="btn btn-outline-dark main-btn">Create your account now!</button></Link> 
        </div>
        <div className="d-inline-flex w-50">
         <img alt="dog" src={Corgi} height="450vh"></img>
        </div>
      </div>
    </div>
  )
}
export default Landing;