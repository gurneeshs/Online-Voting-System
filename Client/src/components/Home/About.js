import './CSS/about.css'
import AboutImage from './Images/voting7.jpg'
import {useEffect, React, useRef } from 'react';
import ScrollReveal from "scrollreveal";


const About = () => {
    const revealRefBottom = useRef(null);
    const revealRefLeft = useRef(null);
    const revealRefTop = useRef(null);
    const revealRefRight = useRef(null);

    useEffect(() => {

        
        ScrollReveal().reveal(revealRefBottom.current, {
            
            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            easing: 'ease',
            reset: 'true',
        });
    }, []);
    useEffect(() => {

        
        ScrollReveal().reveal(revealRefRight.current, {
            
            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'right',
            easing: 'ease',
            reset: 'true',
        });
    }, []); useEffect(() => {

        
        ScrollReveal().reveal(revealRefLeft.current, {
            
            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'left',
            easing: 'ease',
            reset: 'true',
        });
    }, []); useEffect(() => {

        
        ScrollReveal().reveal(revealRefTop.current, {
            
            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'top',
            easing: 'ease',
            reset: 'true',
        });
    }, []);
    return (
        <div className="AboutUs">
            <h2 ref={revealRefTop}>Welcome to Online Voting</h2>
            <div className='About-Content'>
                <div className='textAbout' ref={revealRefLeft}>
                    <p>We are committed to revolutionizing the democratic process through innovative online voting solutions. Our platform is designed to empower individuals and organizations by providing a secure, accessible, and transparent voting experience.</p>
                    <br></br>

                    <p>
                    We're delighted to have you join us in shaping the future through the power of your vote. Our online voting platform has been designed to make the voting process convenient, secure, and accessible to all eligible participants. Whether you're casting your vote for local elections, national initiatives, or organizational decisions, your voice matters.
                    </p>

                </div>
                <div className='image' ref={revealRefRight}>
                    <img src={AboutImage} alt="noimage"></img>
                </div>
            </div>
        </div>
    )
}
export default About;
