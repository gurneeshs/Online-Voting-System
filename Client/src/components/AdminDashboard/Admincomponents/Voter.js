import * as React from 'react';
import { useState, useEffect } from 'react';
import '../CSS/Voter.css'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
// import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';
import axios from 'axios';


const columns = [
    { id: 'firstName', label: `FirstName`, minWidth: 150 },
    { id: 'lastName', label: 'LastName', minWidth: 150 },
    { id: 'email', label: 'Email', minWidth: 150 },
    { id: 'phone', label: 'Phone', minWidth: 140 },
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

export default function Voter() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [voters, setVoters] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:5000/getVoter')
        .then((response) => setVoters(response.data.voter)) 
        .catch(err => console.error("Error fetching data: ", err));        
    },[])
    return (
        <div className='Voters'>
            <h5>Voters</h5>
            <Button id='AddNew' variant="contained">Add New Voter</Button>
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
                                {voters.map((row) => {
                                    return(
                                        <StyledTableRow key={row.firstName} className='Table-Row'>
                                        <StyledTableCell className='Table-Row' component="th" scope="row">{row.firstName}</StyledTableCell>
                                        <StyledTableCell className='Table-Row' align='left'>{row.lastName}</StyledTableCell>
                                        <StyledTableCell className='Table-Row' align="left">{row.email}</StyledTableCell>
                                        <StyledTableCell className='Table-Row' align="left">{row.phone}</StyledTableCell>
                                        <StyledTableCell className='Table-Row' align="left">
                                            <span id='edit' className='Button-span'><Button variant="contained">Edit</Button></span>
                                            <span id='delete' className='Button-span'><Button variant="contained">Delete</Button></span>
                                        </StyledTableCell>
                                    </StyledTableRow>

                                    ) 
                                })}
                                
                            </TableBody>

                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={voters.length}
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