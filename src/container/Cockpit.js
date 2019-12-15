import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import PayWithPaystack from '../paywithPaystack'
import Jumbotron from '../components/Jumbotron';
import Headliners from '../components/Headliners'
import Otherartists from '../components/Otherartists'
import Footer from '../components/Footer';

class Cockpit extends Component {


    render() {
        return <Fragment>
            <Jumbotron />
            <section className="main-section">
            <Headliners />
            <Otherartists />
            </section>
            <Footer />
        </Fragment>
    }
}

export default Cockpit 