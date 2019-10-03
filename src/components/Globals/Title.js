import React from 'react';

export default function Title({title}){//pass the props inside the function looking for a title
    return(
        <div className="text-center text-capitalize">
             <h1>
                 {title}{/*pass the title, this have the styles of the tag h1*/}
             </h1>
        </div>
    )
}