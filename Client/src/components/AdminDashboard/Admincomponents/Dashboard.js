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

export default function Dashboard() {
    const [candidate, setCandidate] = useState([]);
    useEffect(() =>{
        axios.get(`${BASE_URL}/getCandidate`)
        .then((response) => setCandidate(response.data.candidate)) 
        .catch(err => console.error("Error fetching data: ", err));        
    },[])
    return (
        <div className='Dashboard'>
            <h5>Dashboard</h5>
            <div>

                <Card className='Card'>
                    <CardContent className='Card-items' id='Item0'>
                        <Typography variant='h5' color="text.secondary" gutterBottom className='Head'>
                            <CountUp end={4} />
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
                            <CountUp end={56000} />
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
                            <CountUp end={45360} />
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

            <div>
                <BarChart
                    xAxis={[{ scaleType: 'band', data: ['BJP', 'Congress', 'AAP'], categoryGapRatio: 0.6 }]}
                    series={[{ data: [5000,4000,2000] }]}
                    width={800}
                    height={400}
                />

            </div>
            {/* <Tableau url="https://public.tableau.com/views/MarketingCohortsAnalysis"/> */}


        </div>

    );
}