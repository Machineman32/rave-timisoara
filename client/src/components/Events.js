import React from 'react'
import Event from '../components/Event'
import './Events..sass'

import eventImg1 from '../Images/event1.jpg'

import eventImg2 from '../Images/event2.jpg'

import eventImg3 from '../Images/event3.jpg'

import eventImg4 from '../Images/event4.jpg'

import eventImg5 from '../Images/event5.jpg'





const Events = () => {
    return (
        <div className="events">
            <h1>Here are the upcoming events</h1>
            <div className="section group">
                <div className="col span_1_of_2">
                    <div className="events-list">
                        <Event
                            title="DJ Flash // 23.03.2022 // The Vibe Splash"
                            src={eventImg1}
                        />
                        <Event
                            title="X A N T R A  // 22.03.2022 // Conecktion"
                            src={eventImg2}
                        />
                        <Event
                            title="X A N T R A  // 22.03.2022 // Conecktion"
                            src={eventImg2}
                            details="Hai si tu la cel mai tare party din Timisoara"
                        />
                    </div>
                </div>
                <div className="col span_1_of_2">
                    <div className="events-list">
                        <Event
                            title="DJ Flash // 23.03.2022 // The Vibe Splash"
                            src={eventImg1}
                        />
                        <Event
                            title="X A N T R A  // 22.03.2022 // Conecktion"
                            src={eventImg2}
                        />
                        <Event
                            title="X A N T R A  // 22.03.2022 // Conecktion"
                            src={eventImg2}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events