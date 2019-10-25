import React from 'react';
import { Link } from 'gatsby';

const Navbar = () =>{
    return(
        <ul className="nav p-4">
            <li className="nav-item">
                <Link to="/" className="nav-link">LOGO OF THE PAGE</Link>
            </li>
            <li className="nav-item pl-4">
                <Link to="/learnToCode" className="nav-link">Learn To Code</Link>
            </li>
            <li className="nav-item">
                <Link to="/aboutUs" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
                <Link to="/openSourceProject" className="nav-link">Open Source Project</Link>
            </li>
        </ul>
    )
};

export default Navbar;