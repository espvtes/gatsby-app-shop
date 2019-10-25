import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/breathecoLogo.png'

const Navbar = () =>{
    return(
        <nav>
        <ul className="nav p-4">

                <Link to="/" className="nav-link text-dark"><img src={Logo} alt="Logo" width="60" height="60" className="d-inline-block align-top"/></Link>

            <li className="nav-item pt-4 pl-2">
                <Link to="/learnToCode" className="nav-link font-weight-bolder text-muted pt-1">Learn To Code</Link>
            </li>
            <li className="nav-item pt-4 pl-4">
                <Link to="/aboutUs" className="nav-link font-weight-bolder text-muted pt-1">About Us</Link>
            </li>
            <li className="nav-item pt-4 pl-4">
                <Link to="/openSourceProject" className="nav-link font-weight-bolder text-muted pt-1">Open Source Project</Link>
            </li>
            <li className="button pt-4">
                <button type="button" className="btn btn-outline-primary text-right pt-1">Login</button>
            </li>
        </ul>
        </nav>
    )
};

export default Navbar;