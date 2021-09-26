import React from "react";


function Footer() {
    return (
        <footer className="d-flex flex-column align-items-center" id="contactme">
        <div className="container-fluid d-flex justify-content-center">

        
          {/* <!-- linkedin --> */}
            <a href="www.google.com" aria-hidden="true"><span class="visually-hidden"></span><i class="social-icon fab fa-linkedin"></i></a>
          {/* <!-- github --> */}
            <a href="https://github.com/norgard7" aria-hidden="true"><span class="visually-hidden"></span><i class="social-icon fab fa-github"></i></a>
            {/* <!-- email icon --> */}
            <a href="mailto:pawmates@gmail.com" aria-hidden="true"><span class="visually-hidden"></span><i class="social-icon fas fa-envelope"></i></a>
            {/* <!-- phone number icon --> */}
            <a href="tel: +1-651-000-1000" aria-hidden="true"><span class="visually-hidden"></span><i class="social-icon fas fa-phone"></i></a>   
        </div>
        <p class="footer-p">© Copyright 2021 PawMates</p>
      </footer>
    )
}
export default Footer;