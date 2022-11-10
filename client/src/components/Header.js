import React, {useState} from 'react'
import head from '../Images/head2.png'
import '../components/Header.sass'
import Carousel from "./Carousel";
import Navbar from "./Navbar";

const Header = () => {


    return (
        <div>
            <header className="header">
                <Navbar/>
                <img src={head} alt=""/>
                <h1>Timisoara</h1>
            </header>
            <Carousel/>
        </div>
    )
}

export default Header