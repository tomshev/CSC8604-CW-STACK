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