import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './PublicView.css';




const PublicView = () => {
    const [backendData, setBackendData] = useState(null);

    const fetchData = () => {
        fetch("/mealData")
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
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
            <div className='public-view-title'>
                <h2 id="pv-title">TODAY'S CHOICES AND NUTRITION FACTS</h2>
            </div>
            <div style={{flex: 1, overflow: 'hidden'}}>
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    interval={4000}
                    transitionTime={500}
                    showArrows={true}
                    showIndicators={false}
                >
                    <div>
                        <img src="MealVar_1.jpg" alt="Meal Options, Variant 1, Simple"/>
                    </div>
                    <div>
                        <img src="MealVar_2.jpg" alt="Meal Options, Variant 2, Informative"/>
                    </div>
                </Carousel>
            </div>
            <div className='public-view-title'>
                <h2 id="pv-title">LIVE FEED</h2>
            </div>
            <div style={{flex: 1}}>
                {/*Check if backend data is null to determine if loading message should be displayed */}
                {backendData === null ? (
                <p>Loading...</p>
                ) : backendData.error ? ( // Checks if th backendData object contains an error property
                <p> {backendData.error} </p> // Display error message
                ) : (
                  // Display the card data if available
                <p>Card data: {JSON.stringify(backendData.mealData)}</p>
                )}
            </div>
        </div>
    );
}

export default PublicView;