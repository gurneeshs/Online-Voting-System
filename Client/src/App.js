import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import AdminLogin from './components/Sign/AdminLogin';
import Login from './components/Sign/Login';
import User from './components/User/User';
import Signup from './components/Sign/Signup';
import Admin from './components/AdminDashboard/Admin'
import Vote from './components/User/Components/Voter/Vote';
import Voters from './components/AdminDashboard/Voters';
import Candidate from './components/AdminDashboard/Candidate';
import EditProfile from './components/User/Components/EditProfile/EditProfile';

const Routing = ()=>{

  return(
    <Routes>
      <Route exact path="/" element = {<Home />} />
      <Route path='/Signup' element = {<Signup/>} />
      <Route path="/Login" element = {<Login/>} />
      <Route path="/AdminLogin" element = {<AdminLogin/>} />
      <Route path="/Admin" element = {<Admin/>} />
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
      <Routing />      
    </BrowserRouter>
  );
}

export default App;
