import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';
import './CSS/faq.css'
import { useEffect, useRef } from 'react';
import ScrollReveal from "scrollreveal";


export default function FAQ() {
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
        <div className='FAQ'>
            <h2 ref={revealRefTop}>Curious Mind Wants to Know</h2>
            <div className='Questions' ref={revealRefRight}>
                <Accordion className='accordian' >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='heading'>How does it Work?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='answer'>
                            Our online voting system is like magic, but legal. Simply cast your vote with a click!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='accordian' >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='heading'>Is it Secure?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='answer'>
                        Fort Knox is jealous of our security measures. Your vote is safer than a squirrel's acorn stash.                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='accordian' >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='heading'>Can I change my vote?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='answer'>
                            Once you've voted, it's set in stone. Choose wisely, like your life depends on it!                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='accordian' >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='heading'>How does it Work?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='answer'>
                            If you're human and not a robot and you are 18 above, congratulations, you're eligible to vote!                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='accordian' >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='heading'>What if I forget to vote?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='answer'>
                            Forgetfulness is not an option here. Set a reminder, tattoo it on your forehead, just don't miss out!                        
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
        </div>

    );
}
