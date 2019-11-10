import React from 'react';
import JumbotronStyles from '../styles/components.module.css';


const Jumbotron = () => {
    return(
        <div className={JumbotronStyles.jumb}>
            <div className="container">
                <h1 className="display-3 text-center">Welcome to BreatheCo<spam className="text-primary">.</spam>de</h1>
                <p className="lead text-center">Learn and get better at coding, using technology.</p>
            </div>
        </div>
    )
}


export default Jumbotron;