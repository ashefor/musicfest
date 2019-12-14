import React from 'react';

const Footer = props => {
    return <React.Fragment>
        <footer id="contact" className="site-footer">
            <div className="footer-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                                <span className="footer-title">musicfest</span>
                                <span className="footer-copyright">Michael Ashefor {new Date().getFullYear()} </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </React.Fragment>
}

export default Footer