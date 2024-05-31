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
        <CDBSidebar textColor="#fff" backgroundColor="black">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              Administrator
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/Admin" activeClassName="activeClicked" className="NavLink">
                <CDBSidebarMenuItem icon="columns" className="SideNav-options">Dashboard</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/Votes" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table" className="SideNav-options">Votes</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/Voters" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user" className="SideNav-options">Voters</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/Candidate" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="exclamation-circle" className="SideNav-options">Candidates</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon='exclamation-circle' className="SideNav-options">Logout</CDBSidebarMenuItem>
              </NavLink>

            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              style={{
                padding: '2px 5px',
              }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>

    </div>
  );
};

export default Sidebar;