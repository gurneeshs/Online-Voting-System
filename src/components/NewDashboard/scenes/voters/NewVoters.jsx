
import { useState, useEffect } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../newComponents/Header";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import axios from 'axios';
import {BASE_URL} from '../../../../helper'
import { Button } from '@mui/material';


const Team = () => {
    const [theme, colorMode] = useMode();
    const [voters, setVoters] = useState([]);
    const colors = tokens(theme.palette.mode);
    const deleteVoter = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/deleteVoter/${id}`);
            setVoters(voters.filter(voter => voter._id !== id));
        } catch (error) {
            console.error('Error deleting candidate', error);
        }
    };

    const columns = [
        {
            field: "image",
            headerName: "PHOTO",
            renderCell: ({ row: { image } }) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"      
                    >
                    <img src={image} alt="no_image"></img>
                    </Box>
                );
            },
        },
        {
            field: "firstName",
            headerName: "FIRST NAME",
            cellClassName: "name-column--cell",
        },
        {
            field: "lastName",
            headerName: "LAST NAME",
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "AGE",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
        },
        {
            field: "voterid",
            headerName: "VOTER ID",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "email",
            headerName: "EMAIL",
        },
        {
            headerName: "ACTION",
            flex: 1,
            renderCell: ({ row: { _id } }) => {
                return (
                    <Box>
                        <span id='edit' className='Button-span'><Button variant="contained" sx={{ backgroundColor: colors.blueAccent[600], color: 'white', marginRight: 2 }}>Edit</Button></span>
                        <span id='delete' className='Button-span'><Button variant="contained" sx={{ backgroundColor: colors.redAccent[600], color: 'white', marginRight: 2 }} onClick={()=>deleteVoter(_id)}>Delete</Button></span>
                    </Box>
                );
            },
        },
    ];
    useEffect(() =>{
        axios.get(`${BASE_URL}/getVoter`)
        .then((response) => setVoters(response.data.voter)) 
        .catch(err => console.error("Error fetching data: ", err));        
    },[])
    return (<ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="appNew">
                <Sidebar />
                <main className="content">
                    <Topbar />
                    <Box m="0px 20px">
                        <Header title="VOTERS" subtitle="Managing the Voters" />
                        <Box
                            m="20px 0 0 0"
                            height="70vh"
                            // width="160vh"
                            sx={{
                                "& .MuiDataGrid-root": {
                                    border: "none",
                                },
                                "& .MuiDataGrid-cell": {
                                    borderBottom: "none",
                                },
                                "& .name-column--cell": {
                                    color: colors.greenAccent[300],
                                },
                                "& .MuiDataGrid-columnHeaders": {
                                    backgroundColor: colors.blueAccent[700],
                                    borderBottom: "none",
                                },
                                "& .MuiDataGrid-virtualScroller": {
                                    backgroundColor: colors.primary[400],
                                },
                                "& .MuiDataGrid-footerContainer": {
                                    borderTop: "none",
                                    backgroundColor: colors.blueAccent[700],
                                },
                                "& .MuiCheckbox-root": {
                                    color: `${colors.greenAccent[200]} !important`,
                                },
                            }}
                        >
                            <DataGrid rows={voters} columns={columns} getRowId={(row) => row._id} />
                        </Box>
                    </Box>
                </main>
            </div>
        </ThemeProvider>
    </ColorModeContext.Provider>

    )

};

export default Team;
