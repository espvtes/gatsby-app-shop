import React from 'react';
import { Link } from 'gatsby';

const Navbar = () =>{
    return(
        <ul className="nav">
        <li className="nav-item pl-4">
            <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
        </ul>
    )
};

export default Navbar;