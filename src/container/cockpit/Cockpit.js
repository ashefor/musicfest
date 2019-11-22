import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import PayWithPaystack from '../paywithPaystack'
import Jumbotron from '../../components/jumbo/Jumbotron';
import Headliners from '../../components/headliners/Headliners'
import Otherartists from '../../components/otherartists/Otherartists'

class Cockpit extends Component {


    render() {
        return <>
            <Jumbotron />
            <Headliners />
            <Otherartists />
        </>
    }
}

export default Cockpit 