import React, { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import APIService from '../services/api';


const DashboardPage = () =>{
    const [quotes, setQuotes] = useState([]);
    const [loader, setLoader] = useState(<CircularProgress/>);

    useEffect(()=>{
        APIService.getQuotes()
            .then(quotes => {
                setQuotes(quotes);
                setLoader(<></>)
            })
    }, []);


    return (
        <div >
            <h1>Dashboard</h1>

            <Box >
            <Grid 
                container
                direction="column"
                justifyContent="center"
                alignItems="center">

                <Grid item xs={6}>
                <Grid 
                    component={Paper}
                    sx={{
                        minWidth: '800px',
                        minHeight: '300px',
                        padding:'10px 20px',
                    }}>
                        <h3>Quotes list </h3>
                    <Divider />
                    
                    <Grid 
                        sx={{
                            minHeight: '300px',
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        
                    
                        <Grid item >
                            {loader}
                        </Grid>
                        
                        {tableInfo(quotes)}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Box>
        </div>
    );
}

const tableInfo = (quotes) =>{
    if ( quotes.length < 1 ) {
        return (<></>)
    }

    return (
        <Table sx={{ minWidth: 800 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>#ID</TableCell>
                <TableCell >Name</TableCell>
                <TableCell >From</TableCell>
                <TableCell >Destination</TableCell>
                <TableCell >Travellers</TableCell>
                <TableCell >Action</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                
            {quotes.map((row) => (
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell >{row.name}</TableCell>
                <TableCell >{row.from}</TableCell>
                <TableCell >{row.destination}</TableCell>
                <TableCell >{row.travellers}</TableCell>
                <TableCell >
                    <Link to={`/quote/${row.id}`} >
                        <Button size="small">Details</Button>
                    </Link>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    );
}

export default DashboardPage;