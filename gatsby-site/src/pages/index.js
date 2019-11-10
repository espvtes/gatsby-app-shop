import React from "react"
import Layout from '../components/layout.js';
import { Link } from 'gatsby';
import indexStyles from '../styles/index.module.css';
import Jumbotron from '../components/jumbotron.js';




const IndexPage = () => {
    return(
        <Layout>
                <div className="container pt-4">
                <Jumbotron/>

                    <div className="row mt-4">
                        <div className="col-12 col-md-6 center-block text-center">
                            <button id="singlebutton" name="singlebutton" className="btn btn-outline-success center-block btn-lg"><label className="pt-2 pl-4 pr-4">Contribute</label></button>
                        </div>
                        <div className="col-12 col-md-6 center-block text-center">
                            <button id="singlebutton" name="singlebutton" className="btn btn-outline-primary center-block btn-lg"><label className="pt-2 pl-4 pr-4">Start Learning Now</label></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 text-center">Thanks to your constribution we've been able to publish</div>
                        <div className="col-12 col-md-6 text-center">Thanks to your constribution we've been able to publish</div>
                    </div>
                    <p className="display-4">More about BreatheCo</p>

                </div>
        </Layout>

    )
}

export default IndexPage
