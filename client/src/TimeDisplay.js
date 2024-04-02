
/*

  FILE: TimeDisplay.js

  CREATED BY: TOM SEVCOV (190379894)
    
  DESCRIPTION: This is a React component for displaying the current date and time as an element.

*/

import React, { useState, useEffect } from 'react';

function TimeDisplay() {
  
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>{date.toLocaleDateString()} - {date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default TimeDisplay;