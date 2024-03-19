import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './PublicView.css';

const PublicView = () => {
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
                    interval={5000}
                    transitionTime={500}
                    showArrows={true}
                >
                    <div>
                        <img src="MealVar_1.jpg" alt="Image 1"/>
                    </div>
                    <div>
                        <img src="MealVar_2.jpg" alt="Image 2"/>
                    </div>
                </Carousel>
            </div>
            <div className='public-view-title'>
                <h2 id="pv-title">LIVE FEED</h2>
            </div>
            <div style={{flex: 1}}>
                {/* Placeholder for diagram */}
                Diagram will go here
            </div>
        </div>
    );
}

export default PublicView;