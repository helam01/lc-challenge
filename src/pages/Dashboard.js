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

function createData(id, name, departure, destination, travellers, transportation) {
    return { id, name, departure, destination, travellers, transportation };
}

const DashboardPage = () =>{
    const [quotes, setQuotes] = useState([]);

    useEffect(()=>{
        setTimeout(()=>{
            const rows = [
                createData('1', 'Frozen yoghurt', 'Londom (2022-10-15)', 'China (2022-10-25)', 2, 'rental car'),
            ];

            setQuotes(rows);
        }, 2000)
    });


    return (
        <div >
            <h1>Dashboard</h1>

            <Box sx={'auto'}>
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center">
                
                <Grid item xs={4}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>#ID</TableCell>
                                <TableCell >Name</TableCell>
                                <TableCell >Departure</TableCell>
                                <TableCell >Destination</TableCell>
                                <TableCell >Travellers</TableCell>
                                <TableCell >Transportation</TableCell>
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
                                <TableCell >{row.departure}</TableCell>
                                <TableCell >{row.destination}</TableCell>
                                <TableCell >{row.travellers}</TableCell>
                                <TableCell >{row.transportation}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
            </Box>
        </div>
    );
}

export default DashboardPage;