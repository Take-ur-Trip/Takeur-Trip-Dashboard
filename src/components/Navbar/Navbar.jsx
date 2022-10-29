import "./navbar.scss";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

export const Navbar = ({user}) => {

  return (
    <nav className="navbar">
        <div className="rightSide">
                <ul className="nav-items">
                    <li className="nav-item">
                        <DarkModeOutlinedIcon className="icon"/>
                    </li>
                    <li className="nav-item">
                        <AccountCircleOutlinedIcon className="icon"/>
                    </li>
                    <li className="nav-item">
                        <SettingsIcon className="icon"/>
                    </li>
                    <li className="nav-item">
                        <span className="welcomeText">Logged in as <b>{user}</b></span>
                        {/* <span className="welcomeText">Logged in as <b>tmp</b></span> */}
                    </li>
                </ul>
        </div>
    </nav>
  )
}
