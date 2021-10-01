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
          <div className="flex-row py-2 w-100">
              <img src = {Jorge} alt="Jorge, web developer"></img>
              <div className="flex-col px-2">
                    <h3> Jorge Bensus</h3>
                    <a href="mailto:jbensus@gmail.com" target="_blank"> Email: jbensus@gmail.com</a>
                    <a href="https://github.com/gittohubbo" target="_blank"> Github: https://github.com/gittohubbo </a>
              </div>
          </div>
          {/* contact card */}
          <div className="flex-row py-2 w-100">
              <img src = {Ethan} alt="Ethan, web developer"></img>
              <div className="flex-col px-2">
                    <h3> Ethan Morris</h3>
                    <a href="mailto:ethan.morris571@gmail.com" target="_blank"> Email: ethan.morris571@gmail.com</a>
                    <a href="https://github.com/Gimbalbyte" target="_blank"> Github: https://github.com/Gimbalbyte</a>
              </div>
          </div>
          {/* contact card */}
          <div className="flex-row py-2 w-100">
              <img src = {Tuyet} alt="Tuyet, web developer"></img>
              <div className="flex-col px-2">
                    <h3> Tuyet Nguyen</h3>
                    <a href="mailto:tuyetbqcba55@gmail.com" target="_blank"> Email: tuyetbqcba55@gmail.com</a>
                    <a href="https://github.com/tuyetnguyen-tn" target="_blank"> Github: https://github.com/tuyetnguyen-tn </a>
              </div>
          </div>
          {/* contact card */}
          <div className="flex-row py-2 w-100">
              <img src = {Lauren} alt="Lauren, web developer"></img>
              <div className="flex-col px-2">
                    <h3> Lauren Norgard</h3>
                    <a href="mailto:lauren.c.norgard@gmail.com" target="_blank"> Email: lauren.c.norgard@gmail.com</a>
                    <a href="https://github.com/norgard7" target="_blank"> Github: https://github.com/norgard7  </a>
              </div>
          </div>
          {/* contact card */}
          <div className="flex-row py-2 w-100">
              <img src = {Dillion} alt="Dillion, web developer"></img>
              <div className="flex-col px-2">
                    <h3> Dillion Smith</h3>
                    <a href="mailto:dillsmth@gmail.com" target="_blank"> Email: dillsmth@gmail.com</a>
                    <a href="https://github.com/dillon-smith-us" target="_blank"> Github: https://github.com/dillon-smith-us </a>
              </div>
          </div>
        </div>
    </div>
  );
};

export default Contact;
