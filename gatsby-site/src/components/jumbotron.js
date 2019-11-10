import React from 'react';
import JumbotronStyles from '../styles/components.module.css';
import TitleStyles from '../styles/components.module.css';
import WelcomeStyles from '../styles/components.module.css';


const Jumbotron = () => {
    return(
        <div className={JumbotronStyles.jumb}>
            <div className="container">
                <h1 className={WelcomeStyles.welcome}>Welcome to BreatheCo<spam className="text-primary">.</spam>de</h1>
                <p className={TitleStyles.title}>Learn and get better at coding, using technology.</p>
            </div>
        </div>
    )
}


export default Jumbotron;