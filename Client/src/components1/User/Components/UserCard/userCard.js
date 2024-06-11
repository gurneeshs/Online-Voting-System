import * as React from 'react';
import { useState, useEffect } from 'react';
import './userCard.css';
// import userimage from './userimage.jpg'
import axios from 'axios';
import Cookies from 'js-cookie';
import { BASE_URL } from '../../../../helper';


export default function UserCard({ voter}) {
    return (
        <div>
            <div className='User-Card'>
                <div className='userImage'>
                    {/* <img src= {`${path}/`}/> */}

                    {/* <img src={require(`../../../../Server/publicUploads/VoterPhotos/${data}`)}/> */}

                    {
                        voter.image ? (<img src={require(`${BASE_URL}/publicUploads/VoterPhotos/${voter.image}`)} alt='voter-image' />) : (<p>No image</p>)

                    }


                </div><br />
                <div className='userDetails1'>
                    {/* <img src={`/userimage.jpg`}/> */}
                    <p><h6>Name: &nbsp; {voter.firstName}&nbsp;{voter.lastName}</h6> </p>
                    <p><h6>Age: &nbsp;{voter.age}</h6></p>
                    <p><h6>Phone: &nbsp;{voter.phone}</h6> </p>
                    <p><h6>VoterID: &nbsp;{voter.voterid}</h6>  </p>
                    <p><h6>Voter Status: &nbsp;{voter.voteStatus && (<span className='Voted'>Voted</span>)}{(!voter.voteStatus) && (<span className='notVoted'>Not Voted</span>)}</h6>  </p>
                </div>
            </div>
        </div>
    );
}