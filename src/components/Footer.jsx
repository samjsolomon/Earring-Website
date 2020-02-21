import React from "react";

function Footer(){
    return(
        
  <footer className="footer">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-4">
        <span className="copyright">Copyright &copy; Kalico 2020</span>
      </div>
      <div className="col-md-4">
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fa fa-facebook-f"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="list-inline quicklinks">
          <li className="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    )
}

export default Footer;