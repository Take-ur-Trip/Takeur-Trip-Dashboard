import "./rating.scss";
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import GlobalWrapper from '../../components/GlobalWrapper/GlobalWrapper';
import { CircularProgress } from "@mui/material";
import { fetchRating } from "../../actions/rating";

const Rating = ({isLoading, fetchedRating}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRating()).then(() => {
            console.log('req done')
        }).catch(error => {
            console.log('req failed')
        })
    }, [])

    const ratingColumns = [
        { field: 'No.', headerName: 'No.', width: 200},
        { field: 'email', headerName: 'User email', width: 200},
        { field: 'avgRating', headerName: 'Average rating', width: 200, valueFormatter: params => {
            return `${params.value}.0`
        }},
    ]

    const ratingsWithId = fetchedRating.map((el, i) => {
        return {"No." : i+1, ...el}
    })
  return (
    <GlobalWrapper>
        <div className="ratingPageMain">
        {isLoading ? <CircularProgress/> : 
        <DataGrid
          rows={ratingsWithId}
          columns={ratingColumns}
          pageSize={20}
        //   getRowHeight={() => 'auto'}
          getRowId={(row) => row["No."]}
        />
        }
        </div>
    </GlobalWrapper>
  )
}

const mapStateToProps = state => {
    const { isLoading, fetchedRating } = state.rating;
    return {
        isLoading, fetchedRating
    }
}

export default connect(mapStateToProps)(Rating);
