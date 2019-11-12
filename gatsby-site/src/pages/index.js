import React from "react"
import Layout from '../components/layout.js';
import { Link } from 'gatsby';
import indexStyles from '../styles/index.module.css';
import Jumbotron from '../components/jumbotron.js';
import Buttons from '../components/buttons.js'




const IndexPage = () => {
    return(
        <Layout>
                <div className="container pt-4">
                <Jumbotron/>
                <Buttons/>
                    <div className="row">
                        <div className="col-12 col-md-6 text-center">Thanks to your constribution we've been able to publish</div>
                        <div className="col-12 col-md-6 text-center">Thanks to your constribution we've been able to publish</div>
                    </div>

                </div>
        </Layout>

    )
}

export default IndexPage
