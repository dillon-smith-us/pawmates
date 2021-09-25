import React from "react";
import Logo from "../Images/PawMates.png";


function Landing () {
  return (
    <div id="/">
      <div className= "d-flex justify-content-between align-items-center px-5">
        <img alt="logo" src={Logo} width="250" height="100" className="d-inline-block align-top"/>
        <a href="./Login/Login"> <button type="button" className="btn btn-outline-dark main-btn">Login</button></a>
      </div>
      {/* main body container */}
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-inline-flex flex-column align-items-center ">
          <h2 className="px-5">A place for your dog to find their next playmate.</h2>
          <a href="./About/About"> <button type="button" className="btn btn-outline-dark main-btn">Create your account now!</button></a>
        </div>
        <div className="d-inline-flex">
          <a href="https://placeholder.com"><img alt="placeholder" src="https://via.placeholder.com/300"></img></a>
        </div>
      </div>
    </div>
  )
}
export default Landing;