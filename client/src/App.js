import './App.css';
import Header from './components/Header'
import rave from "./Images/rave.jpg";
import React from "react";
import Events from './components/Events'
import EventAdder from "./components/EventAdder";


function App() {
  return (
        <div className="App">
          <Header/>
          <Events/>
          <EventAdder/>
        </div>
  );
}

export default App;
