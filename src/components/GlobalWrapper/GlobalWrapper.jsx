import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import { Sidebar } from '../Sidebar/Sidebar'
import "./GlobalWrapper.scss"
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
} from 'darkreader';

const GlobalWrapper = ({children, darkMode}) => {
  darkMode ? enableDarkMode({brightness: 100, contrast: 100, sepia: 15}) : disableDarkMode()
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
            {children}
        </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser || state.auth.user,
    darkMode: state.darkMode.darkMode
  }
}

export default connect(mapStateToProps)(GlobalWrapper)