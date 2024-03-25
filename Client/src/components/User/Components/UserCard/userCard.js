import * as React from 'react';
import { useState, useEffect } from 'react';
import './userCard.css';
import userimage from './userimage.jpg'
import axios from 'axios';
import Cookies from 'js-cookie';

export default function ActionAreaCard() {
  const [singleVoter, setVoter] = useState([]);

  useEffect(() => {
    // const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    // console.log(token);
      axios.get('/getVoterbyID')
        .then((response) => {
          setVoter(response.data.voter);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
  }, []); 
  return (
    <div>
      <div className='User-Card'>
        <div className='userImage'>
          {/* <img src={"../../../../../../Server/publicUploads/VoterPhotos/img_20211101_082140---copy-1710994851511.JPG"} /> */}
        </div><br />
        <div className='userDetails1'>
          <p><h6>Name: &nbsp; {singleVoter.firstName}</h6> </p>
          <p><h6>Age: &nbsp;{singleVoter.age}</h6></p>
          <p><h6>Phone: &nbsp;{singleVoter.phone}</h6> </p>
          <p><h6>VoterID: &nbsp;{singleVoter.voterid}</h6>  </p>
          <p><h6>Voter Status: &nbsp;<span className='notVoted'>Not Voted</span></h6>  </p>
        </div>
      </div>
    </div>
  );
}