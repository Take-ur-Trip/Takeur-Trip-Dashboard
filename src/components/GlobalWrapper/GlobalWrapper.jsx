import React from 'react'
import { connect } from 'react-redux'
import { Navbar } from '../Navbar/Navbar'
import { Sidebar } from '../Sidebar/Sidebar'
import "./GlobalWrapper.scss"

const GlobalWrapper = ({children, currentUser}) => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
            <Navbar user={currentUser}/>
            {children}
        </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser || state.auth.user
  }
}

export default connect(mapStateToProps)(GlobalWrapper)