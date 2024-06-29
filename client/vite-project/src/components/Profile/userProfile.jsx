import React, { Fragment, useEffect, useState } from 'react';
import { Box, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteBooking, getUserBooking, getUserDetails } from '../../Api-helpers/api-helpers';
import { useNavigate } from 'react-router-dom';


const UserProfile = () => {
    const [bookings, setBookings] = useState([]);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const bookingsRes = await getUserBooking();
                setBookings(bookingsRes.bookings);
                const userRes = await getUserDetails();
                setUser(userRes.user);
            } catch (err) {
                console.log(err);
            }
        };
        fetchUserData();
    }, []);

    const handleDelete=(id)=>{
        deleteBooking(id).then((res)=>console.log(res)).catch((err)=>console.log(err));
        setTimeout(()=>{navigate('/')},1000);
      }
    

    return (
        <Box width={"100%"} display="flex">
            <Fragment>
                {user && (
                    <Box
                        flexDirection="column"
                        width="30%"
                        justifyContent="center"
                        alignItems="center"
                        padding={3}
                    >
                        <AccountCircleIcon sx={{ fontSize: "10rem", textAlign: 'center', ml: 3 }} />
                        <Typography
                            mt={1}
                            padding={1}
                            width="auto"
                            textAlign="center"
                            border="1px solid #ccc"
                            borderRadius={6}
                        >
                            Name: {user.name}
                        </Typography>
                        <Typography
                            mt={1}
                            padding={1}
                            width="auto"
                            textAlign="center"
                            border="1px solid #ccc"
                            borderRadius={6}
                        >
                            Email: {user.email}
                        </Typography>
                    </Box>
                )}
                {bookings && bookings.length > 0 && (
                    <Box width="70%">
                        <Typography variant="h3" fontFamily="Verdana" textAlign="center" padding={3}>
                            Bookings
                        </Typography>
                        <Box
                            margin="auto"
                            display="flex"
                            flexDirection="column"
                            width="80%"
                            marginRight={10}
                        >
                            <List>
                                {bookings.map((booking) => (
                                    <ListItem
                                        key={booking._id}
                                        sx={{
                                            bgcolor: "#808080",
                                            color: "white",
                                            textAlign: "center",
                                            margin: 1,
                                        }}
                                    >
                                        <ListItemText
                                            sx={{
                                                margin: 1,
                                                width: 'auto',
                                                textAlign: "left"
                                            }}
                                        >
                                            Food: {booking.food.title} &nbsp; &nbsp;
                                            Address : {booking.address}
                                        </ListItemText>
                                        <ListItemText
                                            sx={{
                                                margin: 1,
                                                width: 'auto',
                                                textAlign: "left"
                                            }}
                                        >
                                            Time: {booking.time}
                                        </ListItemText>
                                        <IconButton onClick={() => handleDelete(booking._id)} sx={{ color: 'whitesmoke' }}>
                                            <DeleteForeverIcon />
                                        </IconButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                )}
            </Fragment>
        </Box>
    );
};

export default UserProfile;
