import { useState, useEffect, React, useRef} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import UserNavbar from "../Navbar/UserNavbar";
import './CSS/user.css'
import UserCard from './Components/UserCard/userCard'
import UpcomingElections from './Components/UpcomingElections';
import ScrollReveal from "scrollreveal";
import { BASE_URL } from '../../helper';
import Cookies from 'js-cookie';

const User = () =>{
  const location = useLocation();
  const { voterst } = location.state || {};
  // console.log(voterst);
  const setCookie = () => {
    Cookies.set('myCookie', voterst.id, { expires: 7 }); // Set cookie for 7 days
  };

  // const getCookie = () => {
  //   const value = Cookies.get('myCookie');
  // };
  if(!Cookies.get('myCookie')){
    setCookie();
  }
  const voterid = Cookies.get('myCookie');
  const revealRefBottom = useRef(null);
  const revealRefLeft = useRef(null);  
  const revealRefTop = useRef(null);
  const revealRefRight = useRef(null);

  useEffect(() => {
  
    // Initialize ScrollReveal
    ScrollReveal().reveal(revealRefBottom.current, {
      // You can configure options here
      duration: 1000,
      delay: 200,
      distance: '50px',
      origin: 'bottom',
      easing: 'ease',
      reset: 'true',
    });
  }, []);
  useEffect(() => {
  
    // Initialize ScrollReveal
    ScrollReveal().reveal(revealRefRight.current, {
      // You can configure options here
      duration: 1000,
      delay: 200,
      distance: '50px',
      origin: 'right',
      easing: 'ease',
      reset: 'true',
    });
  }, []);  useEffect(() => {
  
    // Initialize ScrollReveal
    ScrollReveal().reveal(revealRefLeft.current, {
      // You can configure options here
      duration: 1000,
      delay: 200,
      distance: '50px',
      origin: 'left',
      easing: 'ease',
      reset: 'true',
    });
  }, []);  useEffect(() => {
  
    // Initialize ScrollReveal
    ScrollReveal().reveal(revealRefTop.current, {
      // You can configure options here
      duration: 1000,
      delay: 200,
      distance: '50px',
      origin: 'top',
      easing: 'ease',
      reset: 'true',
    });
  }, []);  
  const [singleVoter, setVoter] = useState([]);

    useEffect(() => {
      // const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
      // console.log(token);'
      // console.log(voter)
        axios.get(`${BASE_URL}/getVoterbyID/${voterid}`)
          .then((response) => {
            console.log(response.data)
            setVoter(response.data.voter);
          })
          .catch(error => {
            console.error('Error fetching user data:', error);
          });
    }, []); 
  
    return(
        <div className="User">
            <UserNavbar/>
            <div className="Heading2" ref={revealRefTop}>
            <h3>Welcome <span>{singleVoter.firstName}</span></h3>
            </div>
            <div className="userPage" >
                <div className="userDetails" ref={revealRefLeft}>
                    <UserCard voter = {singleVoter}/>
                    {/* <UserUtil voterid = {voterst.id} /> */}
                </div>
                <div className='details' ref={revealRefRight}>
                    <h2> Welcome to <span>Online Voting Platform</span></h2>
                    <h6>Exercise Your Right to Vote Anytime, Anywhere</h6>
                    <p>Welcome to our online voting platform, where your voice matters. With the convenience of modern technology, we bring democracy to your fingertips, enabling you to participate in important decisions and elections from the comfort of your own home. Our secure and user-friendly platform ensures that your vote is counted accurately and confidentially. Whether it's electing your local representatives, deciding on community initiatives, or participating in organizational polls, our platform empowers you to make a difference.</p>
                </div>
            </div>
            <UpcomingElections voteStatus = {singleVoter.voteStatus}/>
        </div>
    )
}
export default User;