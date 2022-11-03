import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Navigate,Route,Routes } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Logs from './pages/logs/logs';
import Rating from './pages/rating/rating';
import Trips from './pages/trips/trips';
import Users from './pages/users/users';
import store from "./store";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={ <Login/> }>
          </Route>


            {/* Private Routes */}
            <Route path="/dashboard" element={
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

            <Route path="/trips" element={
              <ProtectedRoute>
                <Trips/>
              </ProtectedRoute>
            }>
            </Route>

            <Route path="/ratings" element={
              <ProtectedRoute>
                <Rating/>
              </ProtectedRoute>
            }>
            </Route>

            <Route path="/logs" element={
              <ProtectedRoute>
                <Logs/>
              </ProtectedRoute>
            }>
            </Route>
        </Routes>
      </Provider>
    </Router>
  )
};

export default App;