import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../CSS/Dashboard.css'
import CountUp from 'react-countup';
import { BarChart } from '@mui/x-charts/BarChart';
import axios from 'axios';
import { BASE_URL } from '../../../helper';
// import io from 'socket.io-client';

// const socket = io(`${BASE_URL}`);

export default function Dashboard() {

    const [cardData, setcardData] = useState();
    const [candidate, setCandidate] = useState([]);
    // const [voters, setVoters] = useState([]);
    // const [ageGroupData, setAgeGroupData] = useState({});

    // const groupVotersByAge = (voters) => {
    //     const ageGroups = {
    //         '18-25': 0,
    //         '26-35': 0,
    //         '36-45': 0,
    //         '46-55': 0,
    //         '56-65': 0,
    //         '66-75': 0,
    //         '76+': 0,
    //     };

    //     voters.forEach(voter => {
    //         if (voter.age >= 18 && voter.age <= 25) {
    //             ageGroups['18-25']++;
    //         } else if (voter.age >= 26 && voter.age <= 35) {
    //             ageGroups['26-35']++;
    //         } else if (voter.age >= 36 && voter.age <= 45) {
    //             ageGroups['36-45']++;
    //         } else if (voter.age >= 46 && voter.age <= 55) {
    //             ageGroups['46-55']++;
    //         } else if (voter.age >= 56 && voter.age <= 65) {
    //             ageGroups['56-65']++;
    //         } else if (voter.age >= 66 && voter.age <= 75) {
    //             ageGroups['66-75']++;
    //         } else if (voter.age >= 76) {
    //             ageGroups['76+']++;
    //         }
    //     });

    //     return ageGroups;
    // };

    useEffect(() => {
        axios.get(`${BASE_URL}/getCandidate`)
            .then((response) => setCandidate(response.data.candidate))
            .catch(err => console.error("Error fetching data: ", err));
    }, [])

    useEffect(() => {
        axios.get(`${BASE_URL}/getDashboardData`)
            .then((response) => setcardData(response.data.DashboardData))
            .catch(err => console.error("Error fetching data: ", err));
    }, [])

    // const fetchVoterData = async () => {
    //     try {
    //         const response = await axios.get(`${BASE_URL}/getVoter`); // Replace with your actual endpoint
    //         setVoters(response.data.voter);
    //         const groupedData = groupVotersByAge(voters);
    //         setAgeGroupData(groupedData);
    //     }
    //     catch (err) {
    //         console.log("Error Fetching Data", err);
    //     }
    // }
    useEffect(() => {

    }, [])
    // useEffect(() => {
    //     // Fetch initial data
    //     fetchVoterData();

    //     // Listen for updates
    //     socket.on('voterUpdated', () => {
    //         fetchVoterData();
    //     });

    //     // Cleanup on unmount
    //     return () => {
    //         socket.off('voterUpdated');
    //     };
    // }, []);

    if (candidate.length === 0 && !cardData) {
        return <div>Not Set</div>
    }
    const parties = [];
    const vote = [];
    // Use a for loop to iterate over the candidates data and extract the party names
    for (let i = 0; i < candidate.length; i++) {
        const candidated = candidate[i];
        if (candidated && candidated.party && !parties.includes(candidated.party)) {
            parties.push(candidated.party);
            vote.push(candidated.votes);
        }
    }

    return (
        <div className='Dashboard'>
            <h5>Dashboard</h5>
            {(cardData && candidate) ? (<div>

                <Card className='Card'>
                    <CardContent className='Card-items' id='Item0'>
                        <Typography variant='h5' color="text.secondary" gutterBottom className='Head'>
                            <CountUp end={cardData.candidateCount} />
                        </Typography>
                        <Typography variant="h6" component="div" className='Body'>
                            No. of Candidates
                        </Typography>
                        <Typography variant="h6" component="div" className='Footer'>
                            <Button size="small">More Info</Button>
                        </Typography>
                    </CardContent>

                </Card>
                <Card className='Card'>
                    <CardContent className='Card-items' id='Item1'>
                        <Typography variant='h5' color="text.secondary" gutterBottom className='Head'>
                            <CountUp end={cardData.voterCount} />
                        </Typography>
                        <Typography variant="h6" component="div" className='Body'>
                            Total Voters
                        </Typography>
                        <Typography variant="h6" component="div" className='Footer'>
                            <Button size="small">More Info</Button>
                        </Typography>
                    </CardContent>

                </Card>
                <Card className='Card'>
                    <CardContent className='Card-items' id='Item2'>
                        <Typography variant='h5' color="text.secondary" gutterBottom className='Head'>
                            <CountUp end={cardData.votersVoted} />
                        </Typography>
                        <Typography variant="h6" component="div" className='Body'>
                            Voters Voted
                        </Typography>
                        <Typography variant="h6" component="div" className='Footer'>
                            <Button size="small">More Info</Button>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
            ) : ("Loading")}

            {candidate.length ? (<div>
                <br></br>
                <h5>Results</h5>

                <BarChart
                    xAxis={[{ scaleType: 'band', data: parties, categoryGapRatio: 0.6 }]}
                    series={[{ data: vote }]}
                    width={800}
                    height={400}
                />

            </div>
            ) : ("loading")}

            <h3>Under Maintenance</h3>
            {/* {Object.keys(ageGroupData).length ? (<div>
                <br></br>
                <h5>Voters According to different age groups</h5>

                <BarChart
                    xAxis={[{ scaleType: 'band', data: ageGroups, categoryGapRatio: 0.6 }]}
                    series={[{ data: voteCounts }]}
                    width={800}
                    height={400}
                />

            </div>
            ) : ("loading")}

            {candidate.length ? (<div>
                <BarChart
                    xAxis={[{ scaleType: 'band', data: parties, categoryGapRatio: 0.6 }]}
                    series={[{ data: vote }]}
                    width={800}
                    height={400}
                />

            </div>
            ) : ("loading")} */}

            {/* <Tableau url="https://public.tableau.com/views/MarketingCohortsAnalysis"/> */}


        </div>

    );
}