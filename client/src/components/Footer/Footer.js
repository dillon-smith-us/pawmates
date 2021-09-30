import React from 'react';
function Footer() {
    return (
        
        <footer className="footer d-flex flex-column align-items-center" id="contactme">
        <div className="divider container-fluid d-flex justify-content-center">
        
        
          {/* <!-- Facebook--> */}
            <a href="www.facebook.com" aria-hidden="true"><span class="visually-hidden"></span><i class="social-icon fab fa-facebook"></i></a>
          {/* <!-- github --> */}
            <a href="https://github.com/norgard7" aria-hidden="true"><span class="visually-hidden"></span><i class="social-icon fab fa-instagram"></i></a>
            {/* <!-- email icon --> */}
            <a href="mailto:pawMates@gmail.com" aria-hidden="true"><span class="visually-hidden"></span><i class="social-icon fas fa-envelope"></i></a>
            {/* <!-- phone number icon --> */}
            <a href="tel: +1-651-555-5555" aria-hidden="true"><span class="visually-hidden"></span><i class="social-icon fas fa-phone"></i></a>   
        </div>
        <p class="footer-p">© Copyright 2021 PawMates</p>
      </footer>
    )
}
export default Footer;