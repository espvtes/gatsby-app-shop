import React from 'react';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

const Layout = (props) => {
    return(
        <div>
            <Navbar/>
                {props.children}
            <Footer/>
        </div>
    )
}

export default Layout