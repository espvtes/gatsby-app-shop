import React from "react"
import Layout from '../components/layout.js';




const IndexPage = () => {
    return(
        <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <h1 className="display-4 font-weight-bold text-center">Welcome to BreatheCo<spam className="text-info">.</spam>de</h1>
                        <h3 className="font-weigth-bolder text-center text-muted">Learn and get better at coding, using technology.</h3>
                        </div>
                    </div>
                    <div className="row buttons pt-4">
                        <div className="col-12 col-md-6 text-center">
                            <button type="button" className="btn btn-outline-success m-2 btn-lg">Contribute</button>
                        </div>
                        <div className="col-12 col-md-6 text-center">
                            <button type="button" className="btn btn-outline-primary  m-2 btn-lg">Start Learning now</button>
                        </div>
                    </div>
                </div>
        </Layout>

    )
}

export default IndexPage
