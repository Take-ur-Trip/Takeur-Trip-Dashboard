import React, { useState } from 'react'
import { BrowserRouter as Router,Navigate,Route,Routes } from "react-router-dom";
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import useFindUser from './hooks/useFindUser';
import { UserContext } from './context/UserContext';
import { Users } from './pages/users/users';

const App = () => {
  const { user, setUser, isLoading } = useFindUser();
  
  return (
    <Router>
      <UserContext.Provider value={{ user, setUser, isLoading }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={ <Login/> }>
          </Route>


            {/* Private Routes */}
            <Route path="/" element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            }>
            </Route>
            <Route path="/users" element={
              <ProtectedRoute>
                <Users/>
              </ProtectedRoute>
            }>
            </Route>
        </Routes>
      </UserContext.Provider>
    </Router>
  )
};

export default App;