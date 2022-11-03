import React, { useEffect } from 'react'
import "./users.scss";
import GlobalWrapper from '../../components/GlobalWrapper/GlobalWrapper';
import { connect, useDispatch } from 'react-redux';
import { banUser, fetchUsers, unbanUser } from '../../actions/user';
import { useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { Button, CircularProgress } from '@mui/material';
import BlockIcon from '@mui/icons-material/Block';

import {Dialog} from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {TextField} from '@mui/material';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SwitchAccessShortcutIcon from '@mui/icons-material/SwitchAccessShortcut';
import Tooltip from '@mui/material/Tooltip';
import moment from 'moment/moment';


const Users = ({isLoading, fetchedUsers}) => {
  const [error, setError] = useState(false);
  const [masterPassword, setMasterPassword] = useState("");

  /* Banning */
  //Ban states
  const [banDialog, setBanDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState({id: null, email: null});

  //Snackbar
  const [banSnackbar, setBanSnackbar] = useState(false);
  const [isBanned, setIsBanned] = useState(false);
  const [isUnbanned, setIsUnbanned] = useState(false);

  /* Unbanning */
  const [unbanDialog, setUnbanDialog] = useState(false);
  const [unbanSnackbar, setUnbanSnackbar] = useState(false);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers()).then(() => {
    }).catch(() => {
      setError(true)
    })
  }, [])

  const handleChange = event => {
    const { name, value } = event.target;
    setMasterPassword(value)
    console.log(masterPassword)
}

  const handleBan = () => {
    setIsUnbanned(false);
    setIsBanned(false);
    setBanDialog(false);


    dispatch(banUser(selectedUser.id, masterPassword)).then(() => {
      setIsBanned(true);
      setBanSnackbar(true)
    }).catch(error => {
      setIsBanned(false);
      setBanSnackbar(true)
    })
  }

  const handleUnban = () => {
    setIsUnbanned(false);
    setIsBanned(false);
    setUnbanDialog(false);

    dispatch(unbanUser(selectedUser.id, masterPassword)).then(() => {
      setIsUnbanned(true);
      setUnbanSnackbar(true)
    }).catch(error => {
      setIsUnbanned(false);
      setUnbanSnackbar(true)
    })
  }

  const userColumns = [
    { field: 'userId', headerName: 'ID', width: 100},
    { field: 'email', headerName: 'Email', width: 100},
    { field: 'password', headerName: 'Password', width: 100},
    { field: 'verification', type: 'boolean', headerName: 'Verification', width: 100},
    { field: 'accountCreated', type: 'dateTime', headerName: 'Creation date', width: 200, valueFormatter: params => {
      return params.value ? moment(params.value).format('YYYY/MM/DD HH:mm:ss') : "Not accepted yet.";
    }},
    { field: 'bio', headerName: 'Bio', width: 100},
    { field: 'isBanned', type: 'boolean', headerName: 'Banned', width: 100},
    { field: 'isDriver', type: 'boolean', headerName: 'Driver', width: 100},
    { field: 'lastLocation', headerName: 'Last location', width: 100},
    { field: 'phone', headerName: 'Phone', width: 100},
    { field: 'pricing', headerName: 'Pricing', width: 100},
    {
      field: "",
      disableClickEventBubbling: true,
      headerName: "Action",
      renderCell: (params) => {
        const { userId, email, isBanned } = params.row;
        const actionBan = () => {
          setSelectedUser({id: userId, email})
          setBanDialog(true);
        };
        const actionUnban = () => {
          setSelectedUser({id: userId, email})
          setUnbanDialog(true);
        };
        return !isBanned ? <Tooltip title="Ban user"><BlockIcon className='actionIcon' onClick={actionBan}/></Tooltip> : <Tooltip title="Unban user"><SwitchAccessShortcutIcon className='actionIcon' onClick={actionUnban}/></Tooltip>;
      },
      width: 150,
      // onClick: (params, id) => {
      //   alert(params);
      // }
    }
  ]

  return (
    <GlobalWrapper>
      <div className="usersPageMain">
       {isLoading ? <CircularProgress/> : 
       <>
        <DataGrid
          rows={fetchedUsers}
          columns={userColumns}
          pageSize={20}
          // getRowHeight={() => '100px'}
          getRowId={(row) => row.userId}
        />
              <Dialog
        open={banDialog || unbanDialog}
        onClose={() => banDialog ? setBanDialog(false) : setUnbanDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {banDialog ? `Banning user: ${selectedUser.email} (id: ${selectedUser.id})` : `Unbanning user: ${selectedUser.email} (id: ${selectedUser.id})`}
        </DialogTitle>
        <DialogContent className="dialogContent">
          <DialogContentText id="alert-dialog-description">
            {banDialog ? "Provide master password to authenticate your ban action." : "Provide master password to authenticate your unban action."}
          <TextField id="standard-basic" label="Master password" variant="standard" className="masterPasswordInput" onChange={handleChange}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={banDialog ? handleBan : handleUnban} autoFocus>
            {banDialog ? "Ban user!" : "Unban user!"}
          </Button>
        </DialogActions>
      </Dialog>
      {/* SNACKBAR */}
      <Snackbar
        open={banSnackbar || unbanSnackbar}
        autoHideDuration={6000}
        onClose={() => banSnackbar ? setBanSnackbar(false) : setUnbanSnackbar(false)}
        message={(isBanned || isUnbanned) ? `Action done successfully (User: ${selectedUser.email})` : "Incorrect credentials or internal server error."}
        action={(<>
          <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={() => banSnackbar ? setBanSnackbar(false) : setUnbanSnackbar(false)}>
          <CloseIcon fontSize="small" />
          </IconButton>
          </>)}
        />
        </>
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