import React from 'react';
import ButtonStyles from '../styles/components.module.css';

export default class Buttons extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-12 col-md-6">
                    <button type="button" className="btn btn-outline-success float-right"><div className={ButtonStyles.btnCont}>Contribute</div></button>
                </div>
                <div className="col-12 col-md-6">
                    <button type="button" className="btn btn-outline-primary float-left"><div className={ButtonStyles.btnStart}>Start learning Now</div></button>
                </div>
            </div>
        )
    }
}