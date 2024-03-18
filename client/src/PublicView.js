import React from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'; // Import the Slider component

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS

const PublicView = () => {
    return (
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
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
                        <img src="meal1.jpg" alt="Image 1"/>
                    </div>
                    <div>
                        <img src="meal2.jpg" alt="Image 2"/>
                    </div>
                    {/* Add more images as needed */}
                </Carousel>
            </div>
            <div style={{flex: 1}}>
                {/* Placeholder for diagram */}
                Diagram will go here
            </div>
        </div>
    );
}

export default PublicView;