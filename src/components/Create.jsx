import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    let [eventName, setEventName] = useState("");
    let [hostName, setHostName] = useState("");
    let [startTime, setStartTime] = useState("");
    let [endTime, setEndTime] = useState("");
    let [startDate, setStartDate] = useState("");
    let [endDate, setEndDate] = useState("");
    let [location, setLocation] = useState("");
    let [eventPhoto, setEventPhoto] = useState("");

    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        history.push("/event")
    }

    return (
        <div className="create-container">
            <h2 className="create-heading">Please input event details.</h2>
            <form onSubmit={submitHandler} encType='multipart/form-data'>
                <label htmlFor="">Event Name</label>
                <input type="text" required onChange={(e) => setEventName(e.target.value)} />
                <label htmlFor="">Host Name</label>
                <input type="text" required onChange={(e) => setHostName(e.target.value)} />
                <label htmlFor="">Start Time</label>
                <select name="time" id="time" required onChange={(e) => setStartTime(e.target.value)}>
                    <option value="" selected disabled="disabled"></option>
                    <option value="12:00 AM">12:00 AM</option>
                    <option value="12:30 AM">12:30 AM</option>
                    <option value="1:00 AM">1:00 AM</option>
                    <option value="1:30 AM">1:30 AM</option>
                    <option value="2:00 AM">2:00 AM</option>
                    <option value="2:30 AM">2:30 AM</option>
                    <option value="3:00 AM">3:00 AM</option>
                    <option value="3:30 AM">3:30 AM</option>
                    <option value="4:00 AM">4:00 AM"</option>
                    <option value="4:30 AM">4:30 AM</option>
                    <option value="5:00 AM">5:00 AM</option>
                    <option value="5:30 AM">5:30 AM"</option>
                    <option value="6:00 AM">6:00 AM</option>
                    <option value="6:30 AM">6:30 AM</option>
                    <option value="7:00 AM">7:00 AM</option>
                    <option value="7:30 AM">7:30 AM</option>
                    <option value="8:00 AM">8:00 AM</option>
                    <option value="8:30 AM">8:30 AM</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="9:30 AM">9:30 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="12:30 PM">12:30 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="1:30 PM">1:30 PM"</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="2:30 PM">2:30 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="3:30 PM">3:30 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="4:30 PM">4:30 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="5:30 PM">5:30 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                    <option value="6:30 PM">6:30 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="7:30 PM">7:30 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                    <option value="8:30 PM">8:30 PM</option>
                    <option value="9:00 PM">9:00 PM</option>
                    <option value="9:30 PM">9:30 PM</option>
                    <option value="10:00 PM">10:00 PM</option>
                    <option value="10:30 PM">10:30 PM</option>
                    <option value="11:00 PM">11:00 PM</option>
                    <option value="11:30 PM">11:30 PM</option>
                </select>
                <label htmlFor="">End Time</label>
                <select name="time" id="time" required onChange={(e) => setEndTime(e.target.value)}>
                    <option value="" selected disabled="disabled"></option>
                    <option value="12:00 AM">12:00 AM</option>
                    <option value="12:30 AM">12:30 AM</option>
                    <option value="1:00 AM">1:00 AM</option>
                    <option value="1:30 AM">1:30 AM</option>
                    <option value="2:00 AM">2:00 AM</option>
                    <option value="2:30 AM">2:30 AM</option>
                    <option value="3:00 AM">3:00 AM</option>
                    <option value="3:30 AM">3:30 AM</option>
                    <option value="4:00 AM">4:00 AM"</option>
                    <option value="4:30 AM">4:30 AM</option>
                    <option value="5:00 AM">5:00 AM</option>
                    <option value="5:30 AM">5:30 AM"</option>
                    <option value="6:00 AM">6:00 AM</option>
                    <option value="6:30 AM">6:30 AM</option>
                    <option value="7:00 AM">7:00 AM</option>
                    <option value="7:30 AM">7:30 AM</option>
                    <option value="8:00 AM">8:00 AM</option>
                    <option value="8:30 AM">8:30 AM</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="9:30 AM">9:30 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="12:30 PM">12:30 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="1:30 PM">1:30 PM"</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="2:30 PM">2:30 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="3:30 PM">3:30 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="4:30 PM">4:30 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="5:30 PM">5:30 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                    <option value="6:30 PM">6:30 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="7:30 PM">7:30 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                    <option value="8:30 PM">8:30 PM</option>
                    <option value="9:00 PM">9:00 PM</option>
                    <option value="9:30 PM">9:30 PM</option>
                    <option value="10:00 PM">10:00 PM</option>
                    <option value="10:30 PM">10:30 PM</option>
                    <option value="11:00 PM">11:00 PM</option>
                    <option value="11:30 PM">11:30 PM</option>
                </select>
                <label htmlFor="">Start Date</label>
                <input type="date" required onChange={(e) => setStartDate(e.target.value)} />
                <label htmlFor="">End Date</label>
                <input type="date" required onChange={(e) => setEndDate(e.target.value)} />
                <label htmlFor="">Location</label>
                <input type="text" required onChange={(e) => setLocation(e.target.value)} />
                <label htmlFor="">Event Photo</label>
                <input type="text" required onChange={(e) => setEventPhoto(e.target.value)} />
                <input type="submit" value="Next" className="btn-create" />
            </form>
        </div>
    )
}

export default Create;