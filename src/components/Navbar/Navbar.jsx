import "./navbar.scss";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { connect, useDispatch } from "react-redux";
import { toggleDarkmode } from "../../actions/darkMode";
import LightModeIcon from '@mui/icons-material/LightMode';

const Navbar = ({currentUser, darkMode}) => {
    const dispatch = useDispatch();
    const handleDarkModeToggle = () => {
        dispatch(toggleDarkmode());
    }
  return (
    <nav className="navbar">
        <div className="rightSide">
                <ul className="nav-items">
                    <li className="nav-item">
                        {darkMode ? <LightModeIcon onClick={handleDarkModeToggle} className="icon"/> : <DarkModeOutlinedIcon onClick={handleDarkModeToggle} className="icon"/>}
                    </li>
                    <li className="nav-item">
                        <AccountCircleOutlinedIcon className="icon"/>
                    </li>
                    <li className="nav-item">
                        <SettingsIcon className="icon"/>
                    </li>
                    <li className="nav-item">
                        <span className="welcomeText">Logged in as <b>{currentUser}</b></span>
                        {/* <span className="welcomeText">Logged in as <b>tmp</b></span> */}
                    </li>
                </ul>
        </div>
    </nav>
  )
}

const mapStateToProps = state => {
    return {
      currentUser: state.auth.currentUser || state.auth.user,
      darkMode: state.darkMode.darkMode
    }
  }

export default connect(mapStateToProps)(Navbar)