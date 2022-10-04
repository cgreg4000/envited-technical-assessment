import React from "react";
import landing_page_image from './landing_page_image.svg';
import { Link } from "react-router-dom";

const LandingPage = () => {

    return (
        <div className="flexed landing-container">
            <img src={landing_page_image} alt="" className="landing-image" />
            <div className="landing-div">
                <h1>Imagine if</h1>
                <h1 className="snapchat">Snapchat</h1>
                <h1>had events.</h1>
                <p className="right">Easily host and share events with your friends</p>
                <p className="right">across any social media.</p>
                <Link className="btn-create" to={'/create'}>Create my event</Link>
            </div>
        </div>
    )
}

export default LandingPage;