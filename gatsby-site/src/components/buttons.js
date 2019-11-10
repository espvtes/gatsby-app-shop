import React from 'react';

export default class Buttons extends React.Component{
    render(){
        return(
            <div className="text-center">
                <button type="button" className="btn btn-primary btn-lg">Large button</button>
                <button type="button" className="btn btn-secondary btn-lg">Large button</button>
            </div>
        )
    }
}