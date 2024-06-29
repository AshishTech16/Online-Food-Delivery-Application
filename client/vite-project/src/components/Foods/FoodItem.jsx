// FOOD CARD.


import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';

const FoodItem = ({ title, price, posterUrl, id }) => {
    return (
        <Box sx={{ width: 300, height: 300, margin: 2, borderRadius: 5, '&:hover': { boxShadow: '10px 10px 20px #ccc' } }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box component="img" height="50%" width="100%" src={posterUrl} alt={title} sx={{ objectFit: 'cover' }} />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {"₹" + price}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center',mb:3 }}>
                    <Button component={Link} to={`/booking/${id}`} size="small" >
                        ORDER
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default FoodItem;
