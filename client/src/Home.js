
/*

  FILE: Home.js

  CREATED BY: TOM SEVCOV (190379894)
    
  DESCRIPTION: This is a homepage acting as a router when the user first accesses the website.

*/

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
            <Link to="/cashierview">CashierView (Submit customer's order)</Link>
            <br />
            <Link to="/publicview">PublicView (Split screen)</Link>
        </div>
      </div>
    );
  }
  
  export default Home;