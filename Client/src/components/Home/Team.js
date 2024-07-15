import './CSS/team.css'
import { useEffect, React, useRef } from 'react';
import ScrollReveal from "scrollreveal";
import { SocialIcon } from 'react-social-icons'
import image1 from './CSS/image1.JPG'
import image2 from './CSS/image2.jpg'

const Team = () => {
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
        <div className="Team">
            <h2 ref={revealRefTop}> Our Team</h2>
            <div className='Team-Content'>
                <div className='Team-Content-Card' ref={revealRefLeft}>
                    <img src={image1} className='image'></img>
                    <h3>Gurneesh Singh | <span>MERN Stack Developer</span></h3>
                    <p>Enthusiastic Software Developer with a BTech in Computer Science & Engineering, solid foundation in C++, Python and JavaScript. Experienced in crafting engaging web experiences through projects
                        like a Data Analysis System, Online Voting System etc. Adept at adapting to new technologies like React.js and Node.js,
                        eager to contribute adaptability and fresh perspectives to dynamic teams.</p>
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://www.linkedin.com/in/gurneesh-singh-narang-770044230/" target='_blank' url="www.linkedin.com" />
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://github.com/gurneeshs" target='_blank' url="www.github.com" />
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://www.instagram.com/giriraj.ladha/" target='_blank' url="www.instagram.com" />
                </div>

                <div className='Team-Content-Card' ref={revealRefRight}>
                    <img src={image2} className='image'></img>
                    <h3>Girish Ladha | <span>MERN Stack Developer</span></h3>
                    <p>Energetic Software Developer with a BTech in Computer Science & Engineering, proficient in C++, Python, and JavaScript. Skilled in creating interactive web applications, demonstrated through projects like Arwes-AI-Powered-chatbot. Experienced in embracing new technologies such as React.js and Node.js, and ready to bring innovative ideas and flexibility to dynamic teams.</p>                    
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://www.linkedin.com/in/girish-ladha-0a1598225/" target='_blank' url="www.linkedin.com" />
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://github.com/girishladha" target='_blank' url="www.github.com" />
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://www.instagram.com/giriraj.ladha/" target='_blank' url="www.instagram.com" />
                </div>

            </div>
        </div>
    )
}
export default Team;