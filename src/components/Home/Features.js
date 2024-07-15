import './CSS/features.css'
import {useEffect, React, useRef } from 'react';
import ScrollReveal from "scrollreveal";

const Features = () =>{
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
    return(
        <div className="Features">
            <h2 ref={revealRefTop}>Features</h2>
            <div className='Features-Content' >
                <div className='Features-Content-Card' ref={revealRefLeft}>
                    <h5><strong>Security</strong></h5> 
                    <p>We prioritize the security and integrity of every vote cast on our platform. Our robust security measures ensure that each vote is counted accurately and remains confidential.</p>
                </div>
                <div className='Features-Content-Card' ref={revealRefTop}>
                    <h5><strong>Accessibility</strong></h5> 
                    <p>We strive to make voting accessible to all individuals, regardless of their location or physical abilities. Our online platform allows users to participate in elections from the comfort of their own homes.</p>
                </div>
                <div className='Features-Content-Card' ref={revealRefRight}>
                    <h5><strong>Transparency</strong></h5> 
                    <p>We believe in transparency throughout the voting process. Users can verify their votes and view election results in real-time, fostering trust and confidence in the electoral process.</p>
                </div>
                <div className='Features-Content-Card' ref={revealRefLeft}>
                    <h5><strong>User-Friendly Interface</strong></h5> 
                    <p>Our intuitive interface makes it easy for users to navigate the voting process, ensuring a seamless and enjoyable experience for all participants.</p>
                </div>
                <div className='Features-Content-Card' ref={revealRefBottom}>
                    <h5><strong>Customization</strong></h5> 
                    <p>We offer flexible solutions to meet the unique needs of each election. Whether it's a national election, corporate poll, or community survey, our platform can be customized to suit any requirements.</p>
                </div>
                <div className='Features-Content-Card' ref={revealRefRight}>
                    <h5><strong>Security:</strong></h5> 
                    <p>We prioritize the security and integrity of every vote cast on our platform. Our robust security measures ensure that each vote is counted accurately and remains confidential.</p>
                </div>

            </div>
        </div>
    )
}
export default Features;