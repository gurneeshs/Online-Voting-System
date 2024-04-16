import React, { useState, useEffect } from 'react';
import './CSS/BackgroundSlider.css';
import image1 from './assets/images/image2.jpeg'

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
            {/* Your content goes here */}
            <div className="sliding-image">
                {/* <img src={image1}/> */}
                <img src= {require(`./Images/img${(currentImage%9+1)}.jpg`)} alt={`Image ${currentImage}`} className="background-image" />
                {/* <img src={require(`./assets/images/image${(currentImage%5)+1}.jpeg`)} alt={`Image ${(currentImage % 5) + 1}`} className="background-image next" /> */}

            </div>
            <div className="content">
                {/* <h1>Welcome to my website</h1>
                <p>This is a background slider example in ReactJS.</p> */}
            </div>
        </div>
    );
};
export default BackgroundSlider;