import React from "react";
import Jorge from "../Images/Jorge.png";
import Ethan from "../Images/ethan.png";
import Tuyet from "../Images/tuyet.jpg";
import Lauren from "../Images/Lauren.jpg";
import Dillion from "../Images/Dillion.JPG";


const Contact = () => {
  return (
    <div className="container">
      <h1 className="contact-header">Contact Us</h1>
      {/* container for all contact */}
        <div className="flex-row test">
          {/* contact card */}
          <div className="flex-row py-2">
              <img src = {Jorge} alt="Jorge, web developer"></img>
              <div className="flex-col px-2">
                    <h3> Jorge Bensus</h3>
                    <p> Email: jbensus@gmail.com</p>
                    <p> Github: https://github.com/gittohubbo </p>
              </div>
          </div>
          {/* contact card */}
          <div className="flex-row py-2">
              <img src = {Ethan} alt="Ethan, web developer"></img>
              <div className="flex-col px-2">
                    <h3> Ethan Morris</h3>
                    <p> Email: ethan.morris571@gmail.com</p>
                    <p> Github: https://github.com/Gimbalbyte</p>
              </div>
          </div>
          {/* contact card */}
          <div className="flex-row py-2 ">
              <img src = {Tuyet} alt="Tuyet, web developer"></img>
              <div className="flex-col px-2">
                    <h3> Tuyet Nguyen</h3>
                    <p> Email: tuyetbqcba55@gmail.com</p>
                    <p> Github: https://github.com/tuyetnguyen-tn </p>
              </div>
          </div>
          {/* contact card */}
          <div className="flex-row py-2">
              <img src = {Lauren} alt="Lauren, web developer"></img>
              <div className="flex-col px-2">
                    <h3> Lauren Norgard</h3>
                    <p> Email: lauren.c.norgard@gmail.com</p>
                    <p> Github: https://github.com/norgard7  </p>
              </div>
          </div>
          {/* contact card */}
          <div className="flex-row py-2">
              <img src = {Dillion} alt="Dillion, web developer"></img>
              <div className="flex-col px-2">
                    <h3> Dillion Smith</h3>
                    <p> Email: dillsmth@gmail.com</p>
                    <p> Github: https://github.com/dillon-smith-us </p>
              </div>
          </div>
        </div>
    </div>
  );
};

export default Contact;
