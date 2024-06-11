import * as React from 'react';
import '../CSS/Candidate.css'
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{ tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';

// import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';
import axios from 'axios';
import CreateCandidate from './CreateCandidate'
import { BASE_URL } from '../../../helper';

const columns = [
    { id: 'fullname', label: `FullName`, minWidth: 150 },
    { id: 'party', label: 'Party', minWidth: 120 },
    { id: 'bio', label: 'Bio', minWidth: 280 },
    { id: 'photo', label: 'Photo', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 200 },

];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: theme.palette.common,
        color: theme.palette.common.white,
        fontSize: 20,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 18,
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

function createData(fullname,party,bio,photo) {
    return { fullname,party,bio,photo };
}



export default function CandidateTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const [candidate, setCandidate] = useState([]);
    useEffect(() =>{
        axios.get(`${BASE_URL}/getCandidate`)
        .then((response) => setCandidate(response.data.candidate)) 
        .catch(err => console.error("Error fetching data: ", err));        
    },[])

    return (
        <div className='Candidates'>
            <h5>Candidates</h5>
            <Button id='AddNew' variant="contained"><CreateCandidate/></Button>
            <div className='Table'>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead >
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell className='Table-Column-Heading'
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
                                <StyledTableRow key={row.fullname} className='Table-Row'>
                                    <StyledTableCell className='Table-Row' component="th" scope="row">{row.fullName}</StyledTableCell>
                                    <StyledTableCell className='Table-Row' align='left'>{row.party}</StyledTableCell>
                                    <StyledTableCell className='Table-Row' align="left">{row.bio}</StyledTableCell>
                                    <StyledTableCell className='Table-Row' align="center"><img src={require(`../../../../../Server/publicUploads/CandidatePhotos/${row.img}`)}/></StyledTableCell>
                                    <StyledTableCell className='Table-Row' align="left">
                                    <span id='edit' className='Button-span'><Button variant="contained">Edit</Button></span>
                                    <span id='delete' className='Button-span'><Button variant="contained">Delete</Button></span>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>

                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={candidate.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>

            </div>


        </div>

    );
}