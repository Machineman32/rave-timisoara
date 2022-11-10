import React, {useState} from 'react'
import './EventCard.sass'

const Event = (props) => {

    const [btnShow, setBtnShow] = useState('hidden-btn')
    const [hoverOpacity, setHoverOpacity] = useState('non-hovered')

    const showBtn = () => {
        setBtnShow('visible-btn')
        setHoverOpacity('hovered')
    }

    return (
        <div className="event-card hovered-card" onMouseOver={showBtn}>
            <h3 id="event-title">{props.title}</h3>
            <img src={props.src} id="event-img" className={hoverOpacity}/>
            <button id='btn' className={btnShow}>Reserve</button>
            <p className="event-details">{props.details}</p>
        </div>
    )
}

export default Event