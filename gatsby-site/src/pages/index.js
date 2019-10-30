import React from "react"
import Layout from '../components/layout.js';
import { Link } from 'gatsby';
import indexStyles from '../styles/index.module.css';




const IndexPage = () => {
    return(
        <Layout>
                <div className="container pt-4">
                    <div className="row pt-4">
                        <div className="col-12">
                        <h1 className={indexStyles.title}>Welcome to BreatheCo<spam className="text-primary">.</spam>de</h1>
                        <h3 className="font-weigth-bolder text-center text-muted"><label className={indexStyles.smallTitle}>Learn and get better at coding, using technology.</label></h3>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row pt-2">
                            <div className="col-12 col-md-5 pt-4 text-center">
                                <button className="btn btn-outline-success btn-lg">Contribute</button>
                                <p className={indexStyles.pText}>Thanks to your contributions we have been able
                                    to publish 2,000 learners, read more about <u>the
                                    reach and impact of our publications here.</u></p>
                            </div>
                            <div className="col-12 col-md-2"></div>
                            <div className="col-12 col-md-5 pt-4 text-center">
                                <button className="btn btn-outline-primary btn-lg"><label className={indexStyles}>Start Learning now</label></button>
                                <p className={indexStyles.pText}>Access interactive tutorials, readings, coding projects and many
                                other tool powered by technology.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h2 className={indexStyles.aboutBreatheCode}>More about BreatheCode</h2>
                            <div className={indexStyles.text}>We are non-profit that builds technology to enchange the way
                            you learn and evole your coding skills</div>
                        </div>
                        </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h5>Learn to code</h5>
                            <Link to="/" className=""><p>1. Project we are building.</p></Link>
                            <Link to="/" className=""><p>2. People Behind.</p></Link>
                            <Link to="/" className=""><p>3. Join and/or collaborate.</p></Link>
                            <Link to="/" className=""><p>4. How do we make money.</p></Link>
                        </div>
                        <div className="col-12 col-md-6">
                            <h5>Organization</h5>
                            <Link to="/" className=""><p>1. Read: 10min explanations.</p></Link>
                            <Link to="/" className=""><p>2. Practice: Interactive tutorial.</p></Link>
                            <Link to="/" className=""><p>3. Code : build project while learning.</p></Link>
                        </div>
                    </div>
                    <h2>Uncoming events</h2>
                    <p className="text-muted">Share your love for coding and meet other develops.</p>
                </div>
        </Layout>

    )
}

export default IndexPage
