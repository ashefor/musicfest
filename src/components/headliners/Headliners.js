import React from 'react';
import './Headliners.css';
import Img from '../../assets/images/black-chick.jpg'

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
        <div className="lineup-artists-details-wrapper d-flex">
        <figure className="headliner-fig">
            <img src={Img} alt="Black female artist"/>
        </figure>
        <div className="headliner-description">

        </div>
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