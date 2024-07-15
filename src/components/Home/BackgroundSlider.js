import React, { useState, useEffect } from 'react';
import './CSS/BackgroundSlider.css';

const BackgroundSlider = () => {
    const [currentImage, setCurrentImage] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(currentImage => (currentImage % 9) + 1);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="background-slider">
            <div className="sliding-image">
                <img src= {require(`./Images/img${(currentImage%9+1)}.jpg`)} alt="noimage" className="background-image" />

            </div>
            <div className="content">
            </div>
        </div>
    );
};
export default BackgroundSlider;
