import React from 'react';
import Artise1 from '../assets/images/image-1.jpg'
import PayWithPaystack from '../container/paywithPaystack';

const Otherartists = () => {
    return <React.Fragment>
        <div className="other-artistes">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="lineup-artists">
                            <div className="lineup-entry">
                                <p>meet the rest</p>
                                <h2>
                                    complete lineup
                                </h2>
                            </div>
                            <div className="row lineup-artists-details">
                                <div className="col-6 col-md-4 col-lg-3 artist-single">
                                    <figure>
                                        <img src={Artise1} alt="niniola"/>
                                    </figure>
                                    <span>Artist</span>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 artist-single">
                                    <figure>
                                        <img src={Artise1} alt="kannon"/>
                                    </figure>
                                    <span>Artist</span>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 artist-single">
                                    <figure>
                                        <img src={Artise1} alt="tems"/>
                                    </figure>
                                    <span>Artist</span>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 artist-single">
                                    <figure>
                                        <img src={Artise1} alt="rema"/>
                                    </figure>
                                    <span>Artist</span>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 artist-single">
                                    <figure>
                                        <img src={Artise1} alt="zlatan"/>
                                    </figure>
                                    <span>Artist</span>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 artist-single">
                                    <figure>
                                        <img src={Artise1} alt="fireboy"/>
                                    </figure>
                                    <span>Artist</span>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 artist-single">
                                    <figure>
                                        <img src={Artise1} alt="andre"/>
                                    </figure>
                                    <span>Artist</span>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 artist-single">
                                    <figure>
                                        <img src={Artise1} alt="oxlade"/>
                                    </figure>
                                    <span>Artist</span>
                                </div>
                            </div>
                            <div className="row buy-tickets justify-content-center">
                                <div className="buy-tickets-wrapper">
                                    <PayWithPaystack btnClass=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Otherartists