import React from 'react';

export default class Buttons extends React.Component{
    render(){
        return(
            <div className="row text-center">
                <div className="col-12 col-md-6">
                    <button type="button" className="btn btn-outline-success btn-lg">Large button</button>
                </div>
                <div className="col-12 col-md-6">
                    <button type="button" className="btn btn-outline-primary btn-lg">Large button</button>
                </div>
            </div>
        )
    }
}