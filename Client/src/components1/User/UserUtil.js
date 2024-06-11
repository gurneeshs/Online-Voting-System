import * as React from 'react';
import { useState, useEffect } from 'react';
// import './userCard.css';
// import userimage from './userimage.jpg'
import axios from 'axios';
import Cookies from 'js-cookie';
import { BASE_URL } from '../../helper';



export default function UserUtil({ voterid }) {
    const [singleVoter, setVoter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [data, setData] = useState('');

    useEffect(() => {
        // const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
        // console.log(token);
        const fetchData = async () => {
            //   await axios.get(`${BASE_URL}/getVoterbyID/${voterid}`)
            //     .then((response) => {
            //       console.log(response.data)
            //       setVoter(response.data.voter);
            //     })
            //     .catch(error => {
            //         setError(error);
            //       console.error('Error fetching user data:', error);
            //     }).
            //     finally {
            //         setLoading(false);
            //     };

            try {
                const response = await axios.get(`http://localhost:5000/getVoterbyID/${voterid}`, { withCredentials: true });
                setVoter(response.data.voter);
            } catch (err) {
                setError(err.response ? err.response.data : 'Error fetching user details');
            } finally {
                setLoading(false);
            }

        }

        fetchData()

    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!singleVoter) {
        return <div>No user data available</div>;
    }


    return (
        <div>
            <div className='User-Card'>
                <div className='userImage'>
                    {/* <img src= {`${path}/`}/> */}

                    {/* <img src={require(`../../../../Server/publicUploads/VoterPhotos/${data}`)}/> */}

                    {
                        {/* singleVoter.image ? (<img src={require(`../../../../../../Server/publicUploads/VoterPhotos/${singleVoter.image}`)} alt='voter-image' />) : (<p>No image</p>) */ }

                    }


                </div><br />
                <div className='userDetails1'>
                    {/* <img src={`/userimage.jpg`}/> */}
                    {/* <p><h6>Name: &nbsp; {singleVoter.firstName}&nbsp;{singleVoter.lastName}</h6> </p> */}
                    {/* <p><h6>Age: &nbsp;{singleVoter.age}</h6></p> */}
                    {/* <p><h6>Phone: &nbsp;{singleVoter.phone}</h6> </p> */}
                    {/* <p><h6>VoterID: &nbsp;{singleVoter.voterid}</h6>  </p> */}
                    {/* <p><h6>Voter Status: &nbsp;{singleVoter.voteStatus && (<span className='Voted'>Voted</span>)}{(!singleVoter.voteStatus) && (<span className='notVoted'>Not Voted</span>)}</h6>  </p> */}
                </div>
            </div>
        </div>
    );
}