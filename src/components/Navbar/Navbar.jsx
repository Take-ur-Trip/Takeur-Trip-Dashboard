import "./navbar.scss";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsIcon from '@mui/icons-material/Settings';


export const Navbar = () => {
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
                </ul>
        </div>
    </nav>
  )
}
