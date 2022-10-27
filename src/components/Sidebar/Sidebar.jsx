import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import GradeIcon from '@mui/icons-material/Grade';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { Link } from "@mui/material";

export const Sidebar = () => {
    const { logOut } = useAuth();

  const handleLogout = () => {
    logOut();
  }

  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Takeur' Trip</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <div className="items-container">
                    <span className="items-group">MAIN</span>
                    <li className="list-item">
                        <DashboardIcon className="icon"/>
                        <span className="list-text">
                            <Link href="/" className="sidebar-link">Dashboard</Link>
                        </span>
                    </li>
                </div>
                <div className="items-container">
                    <span className="items-group">LISTS</span>
                    <li className="list-item">
                        <PersonIcon className="icon"/>
                        <span className="list-text">
                            <Link href="/users" className="sidebar-link">Users</Link>
                        </span>
                    </li>
                    <li className="list-item">
                        <DriveEtaIcon className="icon"/>
                        <span className="list-text">Trips</span>
                    </li>
                    <li className="list-item">
                        <GradeIcon className="icon"/>
                        <span className="list-text">Ratings</span>
                    </li>
                </div>
                <div className="items-container">
                    <span className="items-group">SERVICE</span>
                    <li className="list-item">
                        <LogoDevIcon className="icon"/>
                        <span className="list-text">Logs</span>
                    </li>
                    <li className="list-item">
                        <SettingsIcon className="icon"/>
                        <span className="list-text">Settings</span>
                    </li>
                </div>
                <div className="items-container">
                    <span className="items-group">USER</span>
                    <li className="list-item">
                        <LogoutIcon className="icon"/>
                        <span className="list-text" onClick={handleLogout}>Logout</span>
                    </li>
                </div>
            </ul>
        </div>
    </div>
  )
}
