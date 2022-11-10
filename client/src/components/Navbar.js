import React, {useState} from "react";

import Menu from "./Menu";

import './Header.sass'



const Navbar = () => {

    const [burgerClass, setBurgerClass] = useState('burger-bar unclicked')
    const [menuClass, setMenuClass] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass('burger-bar clicked')
            setMenuClass('menu visible')
        } else {
            setBurgerClass('burger-bar unclicked')
            setMenuClass('menu hidden')
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div style={{width: '100%', height: '100vh'}}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                </div>
            </nav>
            <div className={menuClass}>
                <div className="search-container">
                    <h2>Let the search begin</h2>
                    <form className="search-form">
                        <input
                            className="search-input"
                            type='text'
                            placeholder='Please search an event'
                        />
                        <button className="search-button">SEARCH</button>
                    </form>
                </div>
                <ul className="menu-container">
                    <li>Home</li>
                    <span>|</span>
                    <li>Events</li>
                    <span>|</span>
                    <li style={{color: 'violet'}}>Add event</li>
                    <span>|</span>
                    <li>Contact</li>
                    <span>|</span>
                    <li>Footer</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar