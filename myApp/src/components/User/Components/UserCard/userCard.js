import * as React from 'react';
import './userCard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import userimage from './userimage.jpg'

export default function ActionAreaCard() {
  return (
    <div>
      <div className='User-Card'>
        <div className='userImage'>
          <img src={userimage}/>
        </div><br/>
        <div className='userDetails1'>
          <p><h6>Name: &nbsp; Ayush Sharma</h6> </p>
          <p><h6>Age: &nbsp;28</h6></p>
          <p><h6>Phone: &nbsp;7987854621</h6> </p>
          <p><h6>VoterID: &nbsp;1254569878</h6>  </p>
          <p><h6>Voter Status: &nbsp;<span className='notVoted'>Not Voted</span></h6>  </p>
        </div>
      </div>
    </div>
  );
}