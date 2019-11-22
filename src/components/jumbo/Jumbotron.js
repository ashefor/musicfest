import React, { Component } from 'react';
import './Jumbotron.css'

class Jumbotron extends Component {
    render() {
        return <div>
            <header>
                <div className="header-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <h1 className="siteName">
                                musicFEST
                                </h1>
                            </div>
                            <div className="col-lg-8">
                                <nav>
                                <ul className="navLinks">
                                    <li>Home</li>
                                    <li>Artists</li>
                                    <li>Contact</li>
                                </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="hero">
                <div className="container">
            <div className="row">
            <div className="col-12 col-lg-10 offset-lg-2">
               <div className="displayHeader">
               <h2>Hello World</h2>
               </div>
            </div>
            </div>
                </div>
            </div>
        </div>
    }
}

export default Jumbotron;