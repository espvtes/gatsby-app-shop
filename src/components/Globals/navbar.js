import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo.svg';//how to import the images
import {FaCartArrowDown} from 'react-icons/fa';




export default class Navbar extends React.Component {
    //links to the pages 
state = {
    navbarOpen: false,
    css: 'collapse navbar-collapse',
    links:[
        {
            id:1,
            path: '/',//here we add the other rute of the other pages
            text: 'home'
        },{
            id:2,
            path: '/about',//here we add the other rute of the other pages
            text: 'about'
        }
    ]
}

navbarHandler = () =>{
        this.state.navbarOpen?this.setState({navbarOpen:false,css:"collapse navbar-collapse"}):
        this.setState({navbarOpen:true,
        css: 'collape navbar-collapse show'})//how to show the links when the navbar is collapsed
}
    render() {
        return (
            //this is a what screen size navbar can expand ///....
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                {/*we have an attribute into the link that sent to the links pages*/}
                <Link to='/' className="navbar-brand">
                    {/*attribute src for link the img/we put here the link as a icon*/}
                    <img src={logo} alt="logo"/>{/* set the image*/}
                    {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
                        Creative Commons (Attribution 3.0 Unported);
                        https://www.iconfinder.com/webalys */}
                </Link>
                {/* this is when the resolution is medium or small the button show up to the right part of the 
                page for hide the links of the navbar */}
                <button 
                    className="navbar-toggler"
                    type="button"
                    onClick={this.navbarHandler}
                >
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className={this.state.css}>
                    <ul className="navbar-nav mx-auto">
                        {
                            this.state.links.map(link =>{
                                return (
                                    <li key={link.id} className="nav-item">
                                        <Link to={link.path} className="nav-link text-capitalize">
                                            {link.text}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        <li className="nav-item ml-sm-5">{/*here you put the icon with spaces*/}
                            <FaCartArrowDown className="cart-icon"/>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
