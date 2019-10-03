import React from 'react';
//is in globals because we reuse in diferent sections of the page

export default function Title({title}){//pass the title props inside the function looking for a title
    return(
        <div className="row text-center text-capitalize">
            <div className="col text-center text-capitalize mb-3">
             <h1 className="display-4 font-weight-bold">
                 {title}{/*pass the title, this have the styles of the tag h1*/}
             </h1>
            </div>
        </div>
    )
}