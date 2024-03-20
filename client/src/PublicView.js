import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Pie } from 'react-chartjs-2';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Chart, ArcElement} from 'chart.js';
// import ChartDataLabels from


import './PublicView.css';


Chart.register(ArcElement);
// Chart.register(ChartDataLabels);

const PublicView = () => {
    const [backendData, setBackendData] = useState(null);

    const [pieData201, setPieData201] = useState({
        labels: ['Meal1', 'Meal2', 'Meal3'],
        datasets: [{
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
            ]
        }]
    });
 
    const [pieData203, setPieData203] = useState({
        labels: ['Meal1', 'Meal2', 'Meal3'],
        datasets: [{
            data: [],
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
            ]
        }]
    });

    const chartOptions = {
        plugins: {
            legend: {
                enabled: true, 
                display: true,
                position: 'bottom', 
            },
            tooltip: {
                enabled: true, 
            },
            datalabels: {
                enabled: true,
            },
            title: {
                display: true,
                text: 'Hi'
            }

        }
    }

    const fetchData = () => {
        fetch("/mealData")
        .then(response => response.json())
        .then(data => {
        setBackendData(data);
         if(data.mealData) {
                const data201 = Object.values(data.mealData["201"]);
                const data203 = Object.values(data.mealData["203"]);
                setPieData201(prevData => ({
                    ...prevData,
                    datasets: [{ ...prevData.datasets[0], data: data201 }]
                }));
                setPieData203(prevData => ({
                    ...prevData,
                    datasets: [{ ...prevData.datasets[0], data: data203 }]
                }));
            }
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
                        <img src="MealVar_1_F.jpg" alt="Meal Options, Variant 1, Simple"/>
                    </div>
                    <div>
                        <img src="MealVar_2_F.jpg" alt="Meal Options, Variant 2, Informative"/>
                    </div>
                </Carousel>
            </div>
            <div className='public-view-title'>
                <h2 id="pv-title">LIVE FEED</h2>
            </div>
            <div style={{flex: 1, height: '50vh'}}>
                {/* Check if backend data is null to determine if loading message should be displayed
                {backendData === null ? (
                <p>Loading...</p>
                ) : backendData.error ? ( // Checks if th backendData object contains an error property
                <p> {backendData.error} </p> // Display error message
                ) : (
                  // Display the card data if available
                <p>Card data: {JSON.stringify(backendData.mealData)}</p>
                )} */}
                <div className="pieChartsContainer" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                {backendData === null ? (
                <p>Loading...</p>
                ) : backendData.error ? (
                <p>{backendData.error}</p>
                ) : (
                <>
                    <div>
                        <h3>Class 201</h3>
                        <Pie data={pieData201} options={chartOptions}/>
                    </div>
                    <div>
                        <h3>Class 203</h3>
                        <Pie data={pieData203} options={chartOptions}/>
                    </div>
                </>
                )}
            </div>
            </div>
        </div>
    );
}

export default PublicView;