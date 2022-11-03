import "./logs.scss";
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import GlobalWrapper from '../../components/GlobalWrapper/GlobalWrapper';
import { CircularProgress } from "@mui/material";
import { fetchLogs } from '../../actions/logger';
import moment from "moment/moment";

const Logs = ({isLoading, fetchedLogs}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLogs()).then(() => {
            console.log('req done')
        }).catch(error => {
            console.log('req failed')
        })
    }, [])

    const logColumns = [
        { field: 'logId', headerName: 'Log Id', width: 100},
        { field: 'log_time', type: 'dateTime', headerName: 'Time logged', width: 200, valueFormatter: params => {
            return params.value ? moment(params.value).format('YYYY/MM/DD HH:mm:ss') : "Bad date format";
          }},
        { field: 'status', headerName: 'Status code', width: 100},
        { field: 'type', headerName: 'Action type', width: 100},
        { field: 'message', headerName: 'Log message', width: 700},
    ]

  return (
    <GlobalWrapper>
        <div className="logsPageMain">
        {isLoading ? <CircularProgress/> : 
        <DataGrid
          rows={fetchedLogs}
          columns={logColumns}
          pageSize={20}
        //   getRowHeight={() => 'auto'}
          getRowId={(row) => row.logId}
        />
        }
        </div>
    </GlobalWrapper>
  )
}

const mapStateToProps = state => {
    const { isLoading, fetchedLogs } = state.logger;
    return {
        isLoading, fetchedLogs
    }
}

export default connect(mapStateToProps)(Logs);
