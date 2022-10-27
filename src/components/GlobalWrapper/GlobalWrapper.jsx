import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Sidebar } from '../Sidebar/Sidebar'
import "./GlobalWrapper.scss"

export const GlobalWrapper = ({children}) => {
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
