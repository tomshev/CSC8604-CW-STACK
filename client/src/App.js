
/*

  FILE: App.js

  CREATED BY: TOM SEVCOV (190379894)
    
  DESCRIPTION: This acts as a main component of this React app. It renders a page as well and can be used
  to test data fetching from the server. It handles routing of the pages too. 

*/

import React, { useEffect, useState } from 'react' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CashierView from './CashierView';
import PublicView from './PublicView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/app" element={<AppTEST />} />
        <Route path="/cashierview" element={<CashierView />} />
        <Route path="/publicview" element={<PublicView />} />
      </Routes>
    </Router>
  );
}

function AppTEST() {

  const [backendData, setBackendData] = useState(null);

  const fetchData = () => {
    fetch("/api")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      })
      .catch(error => console.error("Error fetching data: ", error));
  }

  useEffect(() => {
    fetchData(); 
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div>
      {/*Check if backend data is null to determine if loading message should be displayed */}
      {backendData === null ? (
        <p>Loading...</p>
      ) : backendData.error ? ( // Checks if th backendData object contains an error property
        <p> {backendData.error} </p> // Display error message
      ) : (
        // Display the card data if available
        <p>Card data: {backendData.cardData}</p>
      )}
    </div>
  )
}

export default App