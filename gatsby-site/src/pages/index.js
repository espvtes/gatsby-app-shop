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
                            <div className="col-12 col-md-6 text-center">
                            Thanks to your constribution we've been able to
                            publish 2,000 learners, read more about the reach 
                            and impact of our publications here</div>
                            <div className="col-12 col-md-6 text-center">Access interactive tutorials, readings, coding project
                            and many other tools powered by tecnhology</div>
                        </div>
                    <h2>More about BreatheCode</h2>
                    <p>We are a non-profit that builds tecnhology to enchange the way you learn and evole your coding skills</p>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h5>Learn to code</h5>
                            <p>1.Project we are building</p>
                            <p>2.People Behind.</p>
                            <p>3.Join and/or collaborate.</p>
                            <p>4.How do we make money?</p>
                        
                        </div>
                        <div className="col-12 col-md-6">
                            <h5>Organization</h5>
                            <p>1.Read: 10 min explanations.</p>
                            <p>2.Practice: Interactive tutorials.</p>
                            <p>3.Code: Build projects while learning.</p>
                        </div>
                    </div>
                    <h2>Upcoming  events </h2>
                    <p>Share your love for coding and meet other developers.</p>
                    <div className="row">
                        <div className="col-12 col-md-2 text-center">
                            <h6>May first</h6>
                        </div>
                        <div className="col-12 col-md-10">
                            <h5>Coding session</h5>
                            <p>Share your love for coding and meet other developers.</p>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-2 text-center"><p> 11:00 am</p></div>
                        <div className="col-12 col-md-10"><p>Downtown Miami</p></div>
                    </div>
                </div>
        </Layout>

    )
}

export default IndexPage

