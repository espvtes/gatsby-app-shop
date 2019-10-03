import React from 'react';
import { Link } from 'gatsby'
import Title from '../Globals/Title.js';//import the title

export default function Info(){
    return (
        //seciton in the action context
        <section className="py-5">
            <div className="container">
                <Title title="our story"/>{/*you put the title and add the text */}
                <div className="row">
                    <div className="col-10 col-ms-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">   {/*how to set the text grey opaque*/}
                        Lorem ipsum dolor sit amet, vim dicat laoreet patrioque ad, ea vim legere mollis 
                        suscipit. Mei graeco malorum incorrupte ne, vim cu recusabo salutatus dissentiet.
                         Error nobis theophrastus nam te, dico platonem duo ne, has eius sale iuvaret an. 
                         Ne accusam deserunt elaboraret has, in eos nisl omnes equidem. Mea in dicant 
                         consulatu voluptatum, impedit dolores eam at.
                        </p>
                        <Link t="/about/">
                            <button className="btn text-capitalize btn-yellow" >about page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}