import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import "./FoodStatic.css"

const FoodStatic = () => {
    return (
        <Box sx={{width:'80vw', margin:'40px auto'}}>
             <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid  item xs={12} md={6} lg={4}>
                    <Card className='foodCatagory' sx={{ maxWidth: 345, transition:'150ms' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://images.unsplash.com/photo-1717457779539-2e97f59029c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfDF8MHx8fDA%3D"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Order Online
                            </Typography>
                            <Typography component="p" color="gray">
                                Stay home and order to your doorstep
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card className='foodCatagory' sx={{ maxWidth: 345, transition:'150ms' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfDF8MHx8fDA%3D"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Dining
                            </Typography>
                            <Typography component="p" color="gray">
                                View the city's favourite dining venues
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card className='foodCatagory' sx={{ maxWidth: 345, transition:'150ms' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://images.unsplash.com/photo-1607962370792-08dc39fefd17?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlnaHQlMjBsaWZlfGVufDB8MXwwfHx8MA%3D%3D"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Night Life and Clubs
                            </Typography>
                            <Typography component="p" color="gray">
                                Explore the city’s top nightlife outlets
                            </Typography>
                        </CardContent> 
                    </Card>
                </Grid>
            </Grid>
      </Box>
   
  )
}

export default FoodStatic