import React from "react";
import birthday_cake_image from './birthday_cake.png';

const Event = () => {
    return (
        <div className="event-container flexed">
            <div>
                <h2 className="event-heading">Birthday Bash</h2>
                <p>Hosted by Elysia</p>
                <div>
                    <p>18 August 6:00PM</p>
                    <p>to 19 August 1:00PM UTC +10</p>
                </div>
                <div>
                    <p>Street Name</p>
                    <p>Suburb, State, Postcode</p>
                </div>
            </div>
            <img src={birthday_cake_image} alt="" className="birthday-image" />
        </div>
    )
}

export default Event;