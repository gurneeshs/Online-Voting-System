import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import AdminLogin from './components/Sign/AdminLogin';
import Login from './components/Sign/Login';
import User from './components/User/User';
import Signup from './components/Sign/Signup';
import NewVoters from './components/NewDashboard/scenes/voters/NewVoters';
import Vote from './components/User/Components/Voter/Vote';
import EditProfile from './components/User/Components/EditProfile/EditProfile';
import New from './components/NewDashboard/New';
import NewCandidates from './components/NewDashboard/scenes/candidates/NewCandidates';
import AddCandidate from './components/NewDashboard/scenes/NewCandidate/AddCandidate';
import Calendar from './components/NewDashboard/scenes/calendar/Calendar';
import Line from './components/NewDashboard/scenes/line/Line';
import Pie from './components/NewDashboard/scenes/pie/Pie';
import Result from './components/NewDashboard/scenes/result/Result';
import UpcomingElection from './components/NewDashboard/scenes/upcoming/UpcomingElection';

const Routing = ()=>{

  return(
    <Routes>
      <Route exact path="/" element = {<Home />} />
      <Route path='/Signup' element = {<Signup/>} />
      <Route path="/Login" element = {<Login/>} />
      <Route path="/AdminLogin" element = {<AdminLogin/>} />
      <Route path="/Admin" element = {<New/>} />
      <Route path="/LineChart" element = {<Line/>} />
      <Route path="/BarChart" element = {<Result/>} />
      <Route path="/PieChart" element = {<Pie/>} />
      <Route path="/Voters" element = {<NewVoters/>} />
      <Route path="/Candidate" element = {<NewCandidates/>} />
      <Route path="/AddCandidate" element = {<AddCandidate/>} />
      <Route path="/calendar" element ={<Calendar/>} />
      <Route path="/Edit" element ={<EditProfile/>} />
      <Route path="/User" element = {<User/>} />
      <Route path="/Vote" element = {<Vote/>} />
      <Route path="/upcoming" element = {<UpcomingElection/>}/>
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
