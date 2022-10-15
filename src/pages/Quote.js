import { useParams } from 'react-router';

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import APIService from '../services/api';

const information = (label, value) => {
    return (
        <>
            <Box
                component="span"
                sx={{ display: 'inline-block', mx: '2px' }}
            >
                {label}: 
            </Box>
            <Box
                component="span"
                sx={{ display: 'inline-block', mx: '2px', fontSize:'16px', fontWeight:'bold' }}
            >
                {value}
            </Box>
        </>
    );
}

const QuotePage = (props) =>{
    const { id } = useParams();
    const [quote, setQuote] = useState({});
    const [loader, setLoader] = useState(<CircularProgress/>);

    useEffect(()=>{
        APIService.getQuote(id)
            .then(quote => {
                if ( quote.id === undefined ) {
                    setQuote(undefined);
                } else {
                    setQuote(quote);
                }

                setLoader(<></>)
            })
    });

    return (
        <div >
            <h1>Quote</h1>
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
                            <h3>
                                Details Quote {id}

                                <Link to={`/`} >
                                    <Button size="small">return</Button>
                                </Link>
                            </h3>
                            
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
                                {quoteInfo(quote)}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Box>
        </div>
    );
}

const quoteInfo = (quote) =>{
    if ( quote === undefined ) {
        return (<><h1>Quote not found</h1></>)
    }

    if ( quote.id === undefined ) {
        return (<></>)
    }

    return (
        <Card sx={{ minWidth: 300, textAlign:'left' }}>
            <CardContent>
                
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    Quote information
                </Typography>
                
                <Grid item sx={{
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent:'space-evenly'
                }}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {information('From', quote.from)}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {information('Destination', quote.destination)}
                    </Typography>
                
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {information('Departure date', quote.departure_date)}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {information('Return date', quote.return_date)}
                    </Typography>
                
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {information('Transportation', quote.transportation)}
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {information('Travellers', quote.travellers)}
                    </Typography>
                </Grid>

                <Divider />

                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    Contact
                </Typography>

                <Grid item sx={{
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent:'space-evenly'
                }}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {information('Contact name', quote.contact.name)}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {information('Email', quote.contact.email)}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {information('Phone', quote.contact.phone)}
                    </Typography>
                </Grid>
                
            </CardContent>

            <CardActions>
                <Button size="small">Edit</Button>
            </CardActions>
        </Card>
    );
}

export default QuotePage;