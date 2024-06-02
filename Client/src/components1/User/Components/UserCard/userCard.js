import * as React from 'react';
import { useState, useEffect } from 'react';
import './userCard.css';
import userimage from './userimage.jpg'
import axios from 'axios';
import Cookies from 'js-cookie';


export default function UserCard() {
  const [singleVoter, setVoter] = useState([]);
  const [data, setData] = useState('');
  useEffect(() => {
    // const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    // console.log(token);
    const fetchData = async () => {
      await axios.get('https://online-voting-system-smoky.vercel.app/getVoterbyID')
        .then((response) => {
          setVoter(response.data.voter);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }

    fetchData()

  }, []);



  return (
    <div>
      <div className='User-Card'>
        <div className='userImage'>
          {/* <img src= {`${path}/`}/> */}

          {/* <img src={require(`../../../../Server/publicUploads/VoterPhotos/${data}`)}/> */}

          {
            singleVoter.image ? (<img src={require(`../../../../Server/publicUploads/VoterPhotos/${singleVoter.image}`)} alt='voter-image' />) : (<p>No image</p>)

          }


        </div><br />
        <div className='userDetails1'>
          {/* <img src={`/userimage.jpg`}/> */}
          <p><h6>Name: &nbsp; {singleVoter.firstName}&nbsp;{singleVoter.lastName}</h6> </p>
          <p><h6>Age: &nbsp;{singleVoter.age}</h6></p>
          <p><h6>Phone: &nbsp;{singleVoter.phone}</h6> </p>
          <p><h6>VoterID: &nbsp;{singleVoter.voterid}</h6>  </p>
          <p><h6>Voter Status: &nbsp;{singleVoter.voteStatus && (<span className='Voted'>Voted</span>)}{(!singleVoter.voteStatus) && (<span className='notVoted'>Not Voted</span>)}</h6>  </p>
        </div>
      </div>
    </div>
  );
}