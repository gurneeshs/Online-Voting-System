import logo from './logo.svg';
import React,{useEffect,createContext,useReducer,useContext} from 'react';
import {BrowserRouter,Route,Switch,Routes,useNavigate} from 'react-router-dom';
import './App.css';
import Home from './components1/Home/Home';

import Login from './components1/Sign/Login'
// import Dashboard from './components/screen/Dashboard';
import User from './components1/User/User';
import Signup from './components1/Sign/Signup';
import Admin from './components1/AdminDashboard/Admin'
import Vote from './components1/User/Components/Voter/Vote';
import Votes from './components1/AdminDashboard/Votes';
import Voters from './components1/AdminDashboard/Voters';
import Candidate from './components1/AdminDashboard/Candidate';
import EditProfile from './components1/User/Components/EditProfile/EditProfile';

const Routing = ()=>{
  // const navigate = useNavigate();
  // const {state,dispatch} = useContext(UserContext)
  // useEffect(()=>{
  //   const user = JSON.parse(localStorage.getItem("user"))
  //   if(user){
  //     dispatch({type:"USER",payload:user})
  //   }else{
  //     navigate('/signin')
  //   }
  // },[])
  return(
    <Routes>
      <Route exact path="/" element = {<Home />} />
      <Route path='/Signup' element = {<Signup/>} />
      <Route path="/Login" element = {<Login/>} />
      <Route path="/Admin" element = {<Admin/>} />
      <Route path="/Votes" element = {<Votes/>} />
      <Route path="/Voters" element = {<Voters/>} />
      <Route path="/Candidate" element = {<Candidate/>} />
      <Route path="/Edit" element ={<EditProfile/>} />
      <Route path="/User" element = {<User/>} />
      <Route path="/Vote" element = {<Vote/>} />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routing />      
    </BrowserRouter>
  );
}

export default App;
