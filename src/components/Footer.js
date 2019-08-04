import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <nav className="pull-left">
            <ul className="nav">
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  Hướng dẫn
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  Bản quyền
                </Link>
              </li>
            </ul>
          </nav>
          <div className="copyright ml-auto">@ 2019</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
