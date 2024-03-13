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

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  })

  return (
    <div>

      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>        
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}

    </div>
  )
}

export default App