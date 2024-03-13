import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {

    return (
      <div className="homeContainer">
            <h1>FOOD PREFERENCE ANALYSING SYSTEM</h1>
            <div className="buttonContainer">
            <Link to="/app">TEST FETCHING FROM SERVER</Link>
            <br />
            <Link to="/cashierview">CashierView PANEL</Link>
            <br />
            <Link to="/publicview">PublicView PANEL</Link>
        </div>
      </div>
    );
  }
  
  export default Home;