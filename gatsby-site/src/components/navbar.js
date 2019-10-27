import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/breathecoLogo.png'


const Navbar = () =>{
    return(
        <nav className="navbar navbar-light bg-light">
            <Link>Navbar</Link>
            <a className="navbar-brand">Navbar</a>
            <a className="navbar-brand">Navbar</a>
            <a className="navbar-brand">Navbar</a>
            <form className="form-inline">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
};

export default Navbar;