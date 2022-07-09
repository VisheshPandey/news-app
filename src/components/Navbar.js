import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {Link} from "react-router-dom" ;

export class Navbar extends Component {
    static propTypes = {}

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-light sticky-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            NewsMonkey
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/science">Science</Link></li>



                            </ul>

                        </div>
                    </div>
                </nav>

            </>
        )
    }
}

export default Navbar