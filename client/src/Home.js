import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

    return (
      <div>
        <h1>Food Preference Analysing System</h1>
        <Link to="/app">TEST FETCHING FROM SERVER</Link>
        <br />
        <Link to="/cashierview">CashierView PANEL</Link>
        <br />
        <Link to="/publicview">PublicView PANEL</Link>

      </div>
    );
  }
  
  export default Home;