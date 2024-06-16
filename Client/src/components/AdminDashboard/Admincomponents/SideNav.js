import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import '../CSS/SideNav.css';
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className='SideNav-Container'>
      <div style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }} className='SideNav'>
        <div textColor="#fff" backgroundColor="black">
          <div className='Headinga'>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              Administrator
            </a>
          </div>

          <div className="sidebar-content">
            <div>
              <NavLink exact to="/Admin" activeClassName="activeClicked" className="NavLink">
                <div icon="columns" className="SideNav-options">Dashboard</div>
              </NavLink>
              <NavLink exact to="/Votes" activeClassName="activeClicked" className="NavLink"> 
                <div icon="table" className="SideNav-options">Votes</div>
              </NavLink>
              <NavLink exact to="/Voters" activeClassName="activeClicked" className="NavLink">
                <div icon="user" className="SideNav-options">Voters</div>
              </NavLink>
              <NavLink exact to="/Candidate" activeClassName="activeClicked" className="NavLink">
                <div icon="exclamation-circle" className="SideNav-options">Candidates</div>
              </NavLink>
              <NavLink exact to="/" activeClassName="activeClicked" className="NavLink">
                <div icon='exclamation-circle' className="SideNav-options">Logout</div>
              </NavLink>

            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                padding: '2px 5px',
              }}
            >
              Sidebar Footer
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;