import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/breathecoLogo.png'

const Navbar = () =>{
    return(
        <nav>
        <ul className="nav p-4">
            <li className="nav-item">
                <Link to="/" className="nav-link text-dark"><img src={Logo} alt="Logo" width="60" height="60" className="d-inline-block align-top"/></Link>
            </li>
            <li className="nav-item">
                <Link to="/learnToCode" className="nav-link font-weight-bolder text-muted">Learn To Code</Link>
            </li>
            <li className="nav-item">
                <Link to="/aboutUs" className="nav-link font-weight-bolder text-muted">About Us</Link>
            </li>
            <li className="nav-item">
                <Link to="/openSourceProject" className="nav-link font-weight-bolder text-muted">Open Source Project</Link>
            </li>
                <button type="button" className="btn btn-outline-primary text-right">Login</button>
        </ul>
        </nav>
    )
};

export default Navbar;