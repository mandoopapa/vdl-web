import React from "react"
import logo from '../Logo/logo.png';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light static-top header-a">
            <div className="container nav-container">
                <img src={logo} alt="logo" height={100} />

                <div className="collapse navbar-collapse alink" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Team</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;