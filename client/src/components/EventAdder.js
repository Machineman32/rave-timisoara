import React, {useState} from "react";

import Bg from '../Images/rave.webp'

import './EventAdder.css'

const EventAdder = () => {

    return (
        <div className="event-adder" style={{backgroundImage: `${Bg}`}}>
            <h1>You're our guest as a host</h1>
            <h3>Please enter the event that you want to promote</h3>
            <p>Here you can personalize the event that you want to host.</p>
            <div className="seen">
                <div className="options">
                    <form className="add-event-form">
                        <p>Please enter the name of the event</p>
                        <input className="add-event-input"/>
                    </form>
                    <form className="add-event-form">
                        <p>Please enter your e-mail</p>
                        <input type="email" className="add-event-input"/>
                    </form>
                    <form className="add-event-form">
                        <p>Please upload the image cover</p>
                        <input type="file" className="add-event-input"/>
                    </form>
                    <form className="add-event-form">
                        <p>Please enter the tags</p>
                        <input className="add-event-input"/>
                    </form>
                </div>
                <div className="options">
                    <form className="add-event-form">
                        <p>Please enter the location</p>
                        <input className="add-event-input"/>
                    </form>
                    <form className="add-event-form">
                        <p>Please enter the date</p>
                        <input type="date" className="add-event-input"/>
                    </form>
                    <form className="add-event-form">
                        <p>Please enter the hour</p>
                        <input type="time" className="add-event-input"/>
                    </form>
                    <form className="add-event-form">
                        <p>Please specify if the event is pet free</p>
                        <input type="checkbox" className="add-event-input"/>
                    </form>
                </div>
            </div>
            <button id="event-adder-btn">Submit Event</button>
        </div>
    )
}

export default EventAdder