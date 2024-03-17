import './Vote.css';
import UserNavbar from '../../../Navbar/UserNavbar';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import bjp from './Images/bjp.png';
import cong from './Images/congress.png';
import mod from './Images/modi.jpeg';
import rah from './Images/rahul.jpeg';
import UserCard from '../UserCard/userCard'
import { Modal } from 'material-ui';

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

function createData(name, party, age, symbol, photo) {
    return { name, party, age, symbol, photo };
}

const rows = [
    createData('Narendra Modi', 'BJP', 6.0, bjp, mod),
    createData('Rahul Gandhi', 'Congress', 9.0, cong, rah),
    createData('Narendra Modi', 'BJP', 6.0, bjp, mod),
    createData('Rahul Gandhi', 'Congress', 9.0, cong, rah),
    createData('Narendra Modi', 'BJP', 6.0, bjp, mod),
    createData('Rahul Gandhi', 'Congress', 9.0, cong, rah),

];

export default function CustomizedTables() {
    return (
        <div className='Vote-Page'>
            <UserNavbar />
            {/* <div className='User-Card1'>
            <UserCard/>
            </div> */}
            <div className='candidate'>
                <div className='Heading1'>
                    <p><span>GIVE</span> Your Vote</p>
                </div>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow className='TableRow'>
                                <StyledTableCell className='table_row_heading' align="left">Candidate Name</StyledTableCell>
                                <StyledTableCell className='table_row_heading' align="left">Party</StyledTableCell>
                                <StyledTableCell className='table_row_heading' align="center">Age</StyledTableCell>
                                <StyledTableCell className='table_row_heading' align="center">Symbol</StyledTableCell>
                                <StyledTableCell className='table_row_heading' align="right"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        <span className='Name-Row'><img src={row.photo}></img></span>
                                        <span className='Name-Row'>{row.name}</span>

                                    </StyledTableCell>
                                    <StyledTableCell align='left'>{row.party}</StyledTableCell>
                                    <StyledTableCell align="center">{row.age}</StyledTableCell>
                                    <StyledTableCell align="right"><Avatar
                                        alt="Remy Sharp"
                                        src={row.symbol}
                                        sx={{ width: 35, height: 35, marginLeft: 4 }}
                                    /></StyledTableCell>
                                    <StyledTableCell align="right"><Button variant="contained">Vote</Button></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    );
}