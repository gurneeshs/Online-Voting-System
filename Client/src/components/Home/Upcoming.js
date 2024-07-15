import './CSS/features.css'
import {useEffect, React, useRef } from 'react';
import ScrollReveal from "scrollreveal";

const UpcomingFeatures = () => {
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
        <div className="Features">
            <h2 ref={revealRefTop}> Upcoming Features</h2>
            <div className='Features-Content' >
                <div className='Features-Content-Card' ref={revealRefLeft}>
                    <h5><strong>Mobile OTP</strong></h5>
                    <p>We Will Implement a one-time password sent to voters' mobile phones for secure authentication.</p>
                </div>
                <div className='Features-Content-Card' ref={revealRefTop}>
                    <h5><strong>Face Matching during Voting</strong></h5>
                    <p>Enhance security by verifying voter identity through facial recognition during the voting process.</p>
                </div>
                <div className='Features-Content-Card' ref={revealRefRight}>
                    <h5><strong>State Wise Voters Graph</strong></h5>
                    <p>Visual representation of voter distribution across different states.</p>
                </div>
                <div className='Features-Content-Card' ref={revealRefLeft}>
                    <h5><strong>Voters Graph According to Age Groups</strong></h5>
                    <p>Display the distribution of voters segmented by various age groups.</p>
                </div>
                <div className='Features-Content-Card' ref={revealRefBottom}>
                    <h5><strong>Votes of Candidates Graph according to states</strong></h5>
                    <p>Visualize the number of votes each candidate has received, broken down by state.</p>
                </div>
                <div className='Features-Content-Card' ref={revealRefRight}>
                    <h5><strong>Responsive Design</strong></h5>
                    <p>Ensure the voting platform adapts seamlessly to different screen sizes for an optimal user experience on mobile devices.</p>
                </div>

            </div>
        </div>
    )
}
export default UpcomingFeatures;