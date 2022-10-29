import React, { useEffect } from 'react'
import "./users.scss";
import GlobalWrapper from '../../components/GlobalWrapper/GlobalWrapper';
import { connect, useDispatch } from 'react-redux';
import { fetchUsers } from '../../actions/user';
import { useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { CircularProgress } from '@mui/material';


const Users = ({isLoading, fetchedUsers}) => {
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers()).then(() => {
    }).catch(() => {
      setError(true)
    })
  }, [])

  const userColumns = [
    { field: 'userId', headerName: 'ID', width: 100},
    { field: 'email', headerName: 'Email', width: 100},
    { field: 'password', headerName: 'Password', width: 100},
    { field: 'verification', headerName: 'Verification', width: 100},
    { field: 'accountCreated', headerName: 'Creation date', width: 115},
    { field: 'bio', headerName: 'Bio', width: 100},
    { field: 'isBanned', headerName: 'Banned', width: 100},
    { field: 'isDriver', headerName: 'Driver', width: 100},
    { field: 'lastLocation', headerName: 'Last location', width: 100},
    { field: 'phone', headerName: 'Phone', width: 100},
    { field: 'pricing', headerName: 'Pricing', width: 100},
  ]

  return (
    <GlobalWrapper>
      <div className="usersPageMain">
       {isLoading ? <CircularProgress/> : 
        <DataGrid
          rows={fetchedUsers}
          columns={userColumns}
          pageSize={20}
          checkboxSelection
          getRowId={(row) => row.userId}
        />
       }
      </div>
    </GlobalWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.user.isLoading,
    fetchedUsers: state.user.fetchedUsers
  }
}

export default connect(mapStateToProps)(Users)