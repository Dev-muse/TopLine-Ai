import React from 'react';
import './possibility.css';
import possiblityImage from '../../assets/possibility.png';

const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possiblity-image">
                <img src={possiblityImage} alt="VR tech user" />
            </div>
            <div className="gpt3__possiblity-content">
                <h4>Request early access to get started</h4>
                <h2 className="gradient__text">The possibilities are beyond your imagination</h2>
                <p>AI has tremendous potential when it comes to helping mankind deal with major social issues that are a challenge for us today. Flood forecasting, wildlife conservation, biodiversity research, plant health and agriculture, are just a few areas where AI can make a difference.</p>
                <h4>Request early access to get started</h4>
            </div>
        </div>
    )
}

export default Possibility
