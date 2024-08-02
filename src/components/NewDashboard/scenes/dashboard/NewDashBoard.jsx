import { Box, IconButton, Typography, useTheme, CircularProgress } from "@mui/material";
import { useState, useEffect } from 'react';
import Header from "../../newComponents/Header"
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
// import BarChart from "../../newComponents/BarChart";
// import GeographyChart from "../../newComponents/GeographyChart";
import VoterbyAge from "../../newComponents/VoterbyAge";
import VoterbyState from "../../newComponents/VoterbyState";
import Result from "../../newComponents/BarChart";
import StatBox from "../../newComponents/StatBox";
import "../../New.css"
import axios from 'axios';
import { BASE_URL } from '../../../../helper';

const NewDashboard = () => {
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const upcomingElections = [
        { id: '1', name: 'Presidential Election', date: '2024-11-05' },
        { id: '2', name: 'Senate Election', date: '2024-11-05' },
        { id: '3', name: 'Governor Election', date: '2024-11-05' },
        { id: '4', name: 'Local Council Election', date: '2024-11-05' },
    ];
    const [data, setData] = useState({
        voters: 0,
        candidates: 0,
        voted: 0,
    });
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/getDashboardData`)
            .then((response) => {
                const cardData = response.data.DashboardData;
                setData({
                    voters: cardData.voterCount,
                    candidates: cardData.candidateCount,
                    voted: cardData.votersVoted,
                });
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching data: ", err)
                setError(error);
                setLoading(false);
            });
    }, [])
    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/getCandidate`)
            .then((response) => {
                setCandidates(response.data.candidate);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching data: ", err)
                setError(err);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <CircularProgress />;
    }

    return (
        <div className="mainBox">
            <Box m="20px" height="84vh">
                {/* HEADER */}
                <Box display="flex" mb="10px" justifyContent="space-between" alignItems="center" >
                    <Header title="ADMIN DASHBOARD" subtitle="Welcome Administrator" />

                    <Box>

                    </Box>
                </Box>

                {/* GRID & CHARTS */}
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(12, 1fr)"
                    gridAutoRows="140px"
                    gap="20px"
                >

                    {/* ROW 1 */}
                    <Box
                        gridColumn="span 3"
                        backgroundColor={colors.primary[400]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <StatBox
                            title={data.voters}
                            subtitle="Total Voters"
                            icon={
                                <GroupIcon
                                    sx={{ color: colors.greenAccent[600], fontSize: "35px" }}
                                />
                            }
                        />
                    </Box>
                    <Box
                        gridColumn="span 3"
                        backgroundColor={colors.primary[400]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <StatBox
                            title={data.candidates}
                            subtitle="Total Candidates"
                            icon={
                                <PersonIcon
                                    sx={{ color: colors.greenAccent[600], fontSize: "35px" }}
                                />
                            }
                        />
                    </Box>
                    <Box
                        gridColumn="span 3"
                        backgroundColor={colors.primary[400]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <StatBox
                            title={data.voted}
                            subtitle="Total Voters who have Voted"
                            icon={
                                <HowToVoteIcon
                                    sx={{ color: colors.greenAccent[600], fontSize: "35px" }}
                                />
                            }
                        />
                    </Box>
                    {/* ROW 2 */}
                    <Box
                        gridColumn="span 8"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                    >
                        <Box
                            mt="25px"
                            p="0 30px"
                            display="flex "
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Box>
                                <Typography
                                    variant="h4"
                                    fontWeight="600"
                                    color={colors.grey[100]}
                                >
                                    Election Result
                                </Typography>

                            </Box>
                            <Box>
                                <IconButton>
                                    <DownloadOutlinedIcon
                                        sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                    />
                                </IconButton>
                            </Box>
                        </Box>
                        <Box height="250px" m="-20px 0 0 0">
                            {/* <LineChart isDashboard={true} /> */}
                            <Result isDashboard={true} />
                        </Box>
                    </Box>
                    <Box
                        gridColumn="span 4"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                        overflow="auto"
                    >
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            colors={colors.grey[100]}
                            p="15px"
                        >
                            <Typography color={colors.grey[100]} variant="h4" fontWeight="600">
                                Current Leaders
                            </Typography>
                        </Box>
                        {candidates.map((candidate, i) => (
                            <Box
                                key={`${candidate.id}-${i}`}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                borderBottom={`4px solid ${colors.primary[500]}`}
                                p="15px"
                            >
                                <Box>
                                    <Typography
                                        color={colors.greenAccent[500]}
                                        variant="h5"
                                        fontWeight="600"
                                    >
                                        {candidate.id}
                                    </Typography>
                                    <Typography color={colors.grey[100]}>
                                        {candidate.fullName}
                                    </Typography>
                                </Box>
                                <Box color={colors.grey[100]}>{candidate.party}</Box>
                                {/* <Box
                                    backgroundColor={colors.greenAccent[500]}
                                    p="5px 10px"
                                    borderRadius="4px"
                                >
                                    {candidate.age}
                                </Box> */}
                            </Box>
                        ))}
                    </Box>

                    {/* ROW 3 */}
                    <Box
                        gridColumn="span 4"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                        p="10px"
                    >
                        <Typography color={colors.grey[100]} variant="h4" fontWeight="600" sx={{ padding: "20px 20px 0 20px" }}>
                            Voters By Age
                        </Typography>
                        <Box height="250px" m="0 0 0 0">
                            {/* <LineChart isDashboard={true} /> */}
                            <VoterbyAge isDashboard={true} />
                        </Box>
                    </Box>
                    <Box
                        gridColumn="span 4"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                        p="10px"
                    >
                        <Typography color={colors.grey[100]} variant="h4" fontWeight="600" sx={{ padding: "20px 20px 0 20px" }}>
                            Voters StateWise
                        </Typography>
                        <Box height="250px" m="0 0 0 0">
                            {/* <LineChart isDashboard={true} /> */}
                            <VoterbyState isDashboard={true} />
                        </Box>
                    </Box>
                    <Box
                        gridColumn="span 4"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                        p="10px"
                    >
                        <Typography color={colors.grey[100]} variant="h4" fontWeight="600" sx={{ padding: "20px 20px 0 20px" }}>
                            Upcoming Elections
                        </Typography>
                        <Box height="250px" m="5px 0 0 0" overflow="auto">
                            {upcomingElections.map((election, i) => (
                                <Box
                                    key={`${election.id}-${i}`}
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    borderBottom={`4px solid ${colors.primary[500]}`}
                                    p="15px"
                                >
                                    <Box>
                                        <Typography
                                            color={colors.greenAccent[500]}
                                            variant="h5"
                                            fontWeight="600"
                                        >
                                            {election.name}
                                        </Typography>
                                        <Typography color={colors.grey[100]}>
                                            {election.date}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>

    )
}

export default NewDashboard;