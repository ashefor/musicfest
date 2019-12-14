import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Jumbotron = props => {
    const handleClick = () => {
        const nav = document.querySelector("nav")
        const menu = document.querySelector(".menu-button");
        menu.classList.toggle("menu-button--open");
        nav.classList.toggle("show")
    }
    const closeMenuOnClick = () => {
        const nav = document.querySelector("nav")
        const menu = document.querySelector(".menu-button");
        menu.classList.remove("menu-button--open");
        nav.classList.remove("show");
    }
    const countdown = props => {
        const today = new Date()
        const latedate = new Date("2020-02-08")
        let distance = +latedate - +today;
        let timeleft = {}
        if (distance > 0) {
            timeleft = {
                days: ('0' + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2),
                hours: ('0' + Math.floor((distance / (1000 * 60 * 60)) % 24)).slice(-2),
                minutes: ('0' + Math.floor((distance / 1000 / 60) % 60)).slice(-2),
                seconds: ('0' + Math.floor((distance / 1000) % 60)).slice(-2)
            }
        }
        return timeleft
    }
    const [timeLeft, setTimeLeft] = useState(countdown());
    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(countdown())
        }, 1000);
    })
    const timercomponent = [];
    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return;
        }

        timercomponent.push(
            <div key={interval} className="time-left-wrapper">
                <div className="time-left">
                    {timeLeft[interval]}
                </div>
                <label>
                    {interval}
                </label>
            </div>
        );
    });
    return <React.Fragment>
        <header id="home">
            <div className="header-bar">
                <div className="container-fluid">
                    <div className="row align-items-center fixed_mobile-nav">
                        <div className="col-10 col-lg-4">
                            <h1 className="siteName">
                                musicFEST
                                </h1>
                        </div>
                        <div className="col-2 col-lg-8">
                            <nav>
                                <div className="d-lg-none">
                                    <div onClick={handleClick} className="menu-button">
                                        <span>Menu</span>
                                    </div>
                                </div>
                                <ul className="navLinks">
                                    <li>
                                        <Link smooth to="#home" className="d-lg-none" onClick={closeMenuOnClick}>
                                            Home
                                            </Link>
                                    </li>
                                    <li>
                                        <Link smooth to="#artistes" onClick={closeMenuOnClick}>
                                            Artists
                                        </Link>
                                    </li>
                                    <li>
                                        <Link smooth to="#contact" onClick={closeMenuOnClick}>
                                            Contact
                                        </Link>
                                    </li>
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
                        <div className="countdown d-flex flex-wrap justify-content-between">
                        {timercomponent}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Jumbotron;