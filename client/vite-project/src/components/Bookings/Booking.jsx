// // Booking Page.

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getFooddetails, newBooking } from '../../Api-helpers/api-helpers';
import { useSelector } from 'react-redux';
import { Box, Button, Dialog, FormLabel, TextField, Typography } from '@mui/material';

const labelStyle = { mt: 4, mb: 2 };

const Booking = () => {
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();
  const { id } = useParams();
  const [inputs, setInputs] = useState({
    address: '',
    time: ''
  });
  const [food, setFood] = useState();

  useEffect(() => {
    getFooddetails(id).then((res) => {
      setFood(res.food);
    });
  }, [id]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    newBooking({ ...inputs, food: food._id })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    alert("Order Book Successfully 🚴"); 
    setTimeout(()=> {
      navigate('/')
    },1500); 
  };

  return (
    <Box>
      {food && isUserLoggedIn && (
        <>
          <Typography variant="h4" align="center" margin={2}>
            Book Order for {food.title}
          </Typography>

          <Box display="flex" margin={6}>
            <Box display="flex" flexDirection="column" width="50vw" justifyContent="center">
              <Box width="40vw" height="50vh" margin={1.5}>
                <img src={food.posterUrl} alt={food.title} width="100%" height="100%" />
              </Box>
              <Typography variant="body1" fontStyle="italic" margin={1.5} padding={1} borderLeft={1}>
                {food.description}
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignContent="center"
                margin={5}
                width="40vw"
                padding={3}
                borderRadius={5}
                boxShadow="10px 10px 10px #ccc"
              >
                <Typography variant="h5" align="center" mb={1}>
                  Booking Details
                </Typography>

                <FormLabel sx={labelStyle}>Address</FormLabel>
                <TextField
                  value={inputs.address}
                  onChange={handleChange}
                  name="address"
                  type="text"
                  margin="normal"
                  variant="standard"
                />

                <FormLabel sx={labelStyle}>Pick The Delivery time</FormLabel>
                <TextField
                  value={inputs.time}
                  onChange={handleChange}
                  name="time"
                  type="datetime-local"
                  margin="normal"
                  variant="standard"
                />

                <Button sx={{ borderRadius: 5, margin: 6 }} variant="outlined" color="success" type="submit">
                  Order
                </Button>
              </Box>
            </form>
          </Box>
        </>
      )}

      {!isUserLoggedIn && (
        <Dialog open={true} PaperProps={{ style: { borderRadius: 10 } }}>
          <Box margin={4}>
            <Typography variant="h5" padding={1}>
              You Are Not Logged In
            </Typography>
            <Typography variant="h6" padding={1}>
              Please Log In To Proceed Further
            </Typography>
            <Box align="center" mt={4}>
              <Button
                onClick={() => navigate('/auth')}
                variant="outlined"
                color="primary"
                sx={{ borderRadius: 3, margin: 1 }}
              >
                Login
              </Button>
              <Button
                onClick={() => navigate('/')}
                variant="outlined"
                color="primary"
                sx={{ borderRadius: 3, margin: 1 }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Dialog>
      )}
    </Box>
  );
};

export default Booking;
