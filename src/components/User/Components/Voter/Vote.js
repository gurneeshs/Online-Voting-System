import './Vote.css';
import UserNavbar from '../../../Navbar/UserNavbar';
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ScrollReveal from "scrollreveal";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { BASE_URL } from '../../../../helper';
import Cookies from 'js-cookie';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'rgb(255, 255, 255)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: theme.palette.common,
        color: theme.palette.common.white,
        fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const columns = [
    { id: 'fullname', label: `Candidate Name`, minWidth: 250, align: "left" },
    { id: 'party', label: 'Party', minWidth: 120 },
    { id: 'age', label: 'Age', minWidth: 180, align: "center" },
    { id: 'photo', label: 'Symbol', minWidth: 100, align: "right" },
    { id: 'action', label: '', minWidth: 200 },

];



export default function CustomizedTables() {
    const revealRefBottom = useRef(null);
    const revealRefLeft = useRef(null);
    const revealRefTop = useRef(null);
    const revealRefRight = useRef(null);

    useEffect(() => {


        ScrollReveal().reveal(revealRefBottom.current, {

            duration: 1000,
            delay: 300,
            distance: '50px',
            origin: 'bottom',
            easing: 'ease',
            reset: 'true',
        });
    }, []);
    useEffect(() => {


        ScrollReveal().reveal(revealRefRight.current, {

            duration: 1000,
            delay: 300,
            distance: '50px',
            origin: 'right',
            easing: 'ease',
            reset: 'true',
        });
    }, []); useEffect(() => {


        ScrollReveal().reveal(revealRefLeft.current, {

            duration: 1000,
            delay: 300,
            distance: '50px',
            origin: 'left',
            easing: 'ease',
            reset: 'true',
        });
    }, []); useEffect(() => {


        ScrollReveal().reveal(revealRefTop.current, {

            duration: 1000,
            delay: 300,
            distance: '50px',
            origin: 'top',
            easing: 'ease',
            reset: 'true',
        });
    }, []);
    const [candidate, setCandidate] = useState([]);
    const voterid = Cookies.get('myCookie')
    useEffect(() => {
        axios.get(`${BASE_URL}/getCandidate`)
            .then((response) => setCandidate(response.data.candidate))
            .catch(err => console.error("Error fetching data: ", err));
    }, [])

    const [voter, setVoter] = useState([]);
    useEffect(() => {
        // const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
        // console.log(token);
        axios.get(`${BASE_URL}/getVoterbyID/${voterid}`)
            .then((response) => {
                setVoter(response.data.voter);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);





    const handleVote = (id) => {
        // Send a PATCH request to update the vote count
        if (voter.voteStatus) {
            alert("You Have Already Voted");
        }
        else {
            voter.voteStatus = true;
            axios.patch(`${BASE_URL}/getCandidate/${id}`)
                .then(response => {
                    // Update the vote count in the local state
                    // setCandidates(candidates.map(candidate => {
                    //     if (candidate._id === id) {
                    //         return { ...candidate, votes: response.data.votes };
                    //     }
                    //     return candidate;
                    // }));
                })
                .catch(error => {
                    console.error('Error voting:', error);
                });
            handleOpen()

            axios.patch(`${BASE_URL}/updateVoter/${voter._id}`, voter);
        };
    }
    



    return (
        <div className='Vote-Page'>
            <UserNavbar />
            <div className='candidate'>
                <h2 ref={revealRefLeft}>2024 India General Election</h2>
                <div className='Heading1' ref={revealRefRight}>
                    <p><span>GIVE</span> Your Vote</p>
                </div>
                <Modal
                    className='VoteContent'
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={open} className='VoteGivenBox'>
                        <Box sx={style} className="MessageBox">
                            <h2>Congratulations! </h2>
                            <h5>You Have Successfully Voted</h5>
                            <button onClick={handleClose}><a href="/User">Ok</a></button>
                        </Box>
                    </Fade>
                </Modal>
                <TableContainer component={Paper} ref={revealRefBottom}>
                    <Table sx={{ minWidth: 200 }} aria-label="customized table">
                        <TableHead>
                            <TableRow className='TableRow'>
                                {columns.map((column) => (
                                    <TableCell className='table_row_heading'
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {candidate.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell>
                                        {
                                            row.img ? (
                                                <span className='Name-Row image'>
                                                    <img
                                                        alt="Remy Sharp"
                                                        src={row.img}

                                                    />
                                                </span>

                                            ) : (<p>No image</p>)

                                        }
                                        <span className='Name-Row text' align='left'>{row.fullName}</span>

                                    </StyledTableCell>
                                    <StyledTableCell align='left'>{row.party}</StyledTableCell>
                                    <StyledTableCell align="center">{row.age}</StyledTableCell>
                                    <StyledTableCell align="right" className='Symbol'>
                                        {
                                            
                                            row.symbol ? (
                                                
                                                <img
                                                    alt={row.symbol}
                                                    src={row.symbol}

                                                />

                                            ) : (<p>No image</p>)

                                        }
                                    </StyledTableCell>
                                    <StyledTableCell align="right" className="voteButton">
                                        <Button variant="contained" className="voteButton" onClick={() => handleVote(row._id)}>Vote</Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    );
}