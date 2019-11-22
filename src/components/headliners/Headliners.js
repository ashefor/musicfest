import React from 'react';
import './Headliners.css';
import blackChickImg from '../../assets/images/black-chick.jpg'

const Headliners = () => {
    return (
        <div className="headliners">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="lineup-artists">
                            <div className="lineup-entry">
                                <p>just the best</p>
                                <h2>
                                    the lineup artists-headliners
                                </h2>
                            </div>
                            <div className="lineup-artists-details">
                                <div className="lineup-artists-details-wrapper d-block d-md-flex">
                                    <figure className="headliner-fig">
                                        <img src={blackChickImg} alt="Black female artist" />
                                    </figure>
                                    <div className="headliner-description">
                                        <div className="headliner-description-wrapper">
                                            <div className="headliners-title">
                                                Simi
                                                </div>
                                            <div className="headliners-content">
                                                <p>
                                                    Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lineup-artists-details-wrapper d-block d-md-flex">
                                    <div className="headliner-description">
                                    <figure className="headliner-fig d-md-none">
                                        <img src={blackChickImg} alt="Black female artist" />
                                    </figure>
                                        <div className="headliner-description-wrapper">
                                            <div className="headliners-title">
                                                Wizkid
                                                </div>
                                            <div className="headliners-content">
                                                <p>
                                                    Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <figure className="headliner-fig d-none d-md-block">
                                        <img src={blackChickImg} alt="Black female artist" />
                                    </figure>
                                </div>
                                <div className="lineup-artists-details-wrapper d-block d-md-flex">
                                    <figure className="headliner-fig">
                                        <img src={blackChickImg} alt="Black female artist" />
                                    </figure>
                                    <div className="headliner-description">
                                        <div className="headliner-description-wrapper">
                                            <div className="headliners-title">
                                                Tiwa Savage
                                                </div>
                                            <div className="headliners-content">
                                                <p>
                                                    Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lineup-artists-details-wrapper d-block d-md-flex">
                                    <div className="headliner-description">
                                    <figure className="headliner-fig d-md-none">
                                        <img src={blackChickImg} alt="Black female artist" />
                                    </figure>
                                        <div className="headliner-description-wrapper">
                                            <div className="headliners-title">
                                                Davido
                                                </div>
                                            <div className="headliners-content">
                                                <p>
                                                    Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <figure className="headliner-fig d-none d-md-block">
                                        <img src={blackChickImg} alt="Black female artist" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headliners