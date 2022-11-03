import "./trips.scss";
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import { fetchTrips } from '../../actions/trip';
import GlobalWrapper from '../../components/GlobalWrapper/GlobalWrapper';
import moment from "moment/moment";
import { CircularProgress } from "@mui/material";

const Trips = ({fetchedTrips, isLoading}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTrips()).then(() => {
        }).catch(error => {
            console.log('req failed')
        })
    }, [])

    const tripColumns = [
        { field: 'tripId', headerName: 'ID', width: 100},
        { field: 'passengerId', headerName: 'Passenger ID', width: 100},
        { field: 'driverId', headerName: 'Driver ID', width: 100},
        { field: 'dateOfBook', type: 'dateTime', headerName: 'Book date', width: 200, valueFormatter: params => {
            return params.value ? moment(params.value).format('YYYY/MM/DD HH:mm:ss') : "Not accepted yet.";
        }},
        { field: 'startPoint', headerName: 'Start point', width: 100, valueFormatter: params => {
            return `Latitude: ${params.value.x} Longtitude: ${params.value.y}`
        }},
        { field: 'endPoint', type: 'point', headerName: 'End point', width: 100, valueFormatter: params => {
            return `Latitude: ${params.value.x} Longtitude: ${params.value.y}`
        }},
        { field: 'distance', headerName: 'Distance', width: 100, valueFormatter: params => {
            return params.value ? `${params.value}km` : `Cannot parse distance!`
        }},
        { field: 'status', headerName: 'Status', width: 100},
        { field: 'dateOfAccept', type: 'dateTime', headerName: 'Accept date', width: 200, valueFormatter: params => {
            return params.value ? moment(params.value).format('YYYY/MM/DD HH:mm:ss') : "Not accepted yet.";
        }},
        { field: 'whoHasCanceled', headerName: 'Who canceled?', width: 100},
    ]

  return (
    <GlobalWrapper>
        <div className="tripsPageMain">
        {isLoading ? <CircularProgress/> : 
        <DataGrid
          rows={fetchedTrips}
          columns={tripColumns}
          pageSize={40}
          getRowHeight={() => 'auto'}
          getRowId={(row) => row.tripId}
        />}
        </div>
    </GlobalWrapper>
  )
}

const mapStateToProps = state => {
    const { isLoading, fetchedTrips } = state.trip;
    return {
        isLoading, fetchedTrips
    }
}

export default connect(mapStateToProps)(Trips);
