import { Form, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { Box, Button, Dialog, FormLabel, IconButton, TextField, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
const labelStyle = { mt: 1, mb: 2 };

const AuthForm = ({onSubmit,isAdmin}) => {
    const navigate = useNavigate();
    const crossHandler = () => {
        navigate("/");
    }

    const [inputs,setInputs] = useState({
        name : "",
        email : "",
        password : ""
    });
    
    const [isSignup,setIsSignup] = useState(false);

    // whenever the user will write anything this will be called.
    const handleChange = (e) => {
        setInputs((prevState) => ({
            // we are leaving previous stored value as it is using (...prevState) to main the immutability of react and making new state with new value.
            ...prevState,
            [e.target.name] : e.target.value,
            [e.target.email] : e.target.email,
            [e.target.password] : e.target.password
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({inputs,signup : isAdmin ? false : isSignup});
        // if isAdmin is true then Signup will not happen by default Just for security.
        setTimeout(()=>{
          navigate('/')
        },2000);
    };

    return (
      <Box sx={{borderColor: '#FFA500'}}>
        <Dialog paperProps={{style : {borderRadius : 20}}} open={true} >

        <Box sx={{ml:'auto',padding:1}}>
          <IconButton onClick={crossHandler}>
            <ClearIcon/>
          </IconButton>
        </Box>

        <Typography varaint='h4' textAlign={"center"}>
        {isSignup ? "Signup" : "Login"}
        </Typography>
        
        <form onSubmit={handleSubmit}>
        <Box 
        padding={6}
        display={'flex'} justifyContent={'center'}
        flexDirection="column"
        width={400}
        margin="auto"
        alignContent={'center'}
        >
        {/* // Name Field */}
        { !isAdmin && isSignup && (
            // If it is not an admin signup request only isSignup(user signup request) then it proceeds.
            <>
                <FormLabel sx={labelStyle}>Name</FormLabel>
                <TextField
                   value={inputs.name}
                   onChange={handleChange}
                   margin="normal"
                   varaint="standard"
                   type={'text'}
                   name="name"
                />
            </>
        )}
       {/* // Email Field */}
       <FormLabel sx={labelStyle}>Email</FormLabel>
          <TextField
            value={inputs.email}
            onChange={handleChange}
            margin="normal"
            variant='standard'
            type={'email'}
            name="email"
          />
        {/* // Password Field */}
        <FormLabel sx={labelStyle}>Password</FormLabel>
          <TextField
            value={inputs.password}
            onChange={handleChange}
            margin="normal"
            variant='standard'
            type={'password'}
            name="password"
          />
        {/* // Button Field */}
        <Button sx={{mt:2 , borderRadius:10,bgcolor:"#FFA500"}}
        type="submit"
        fullWidth variant='contained'>
        {isSignup ? "signup" : "Login"}
        </Button>

       {/* changing text and final check it is AdminSignup don't move forward */}
        { !isAdmin && (
          <Button
           onClick={()=> setIsSignup(!isSignup)}
           sx={{mt:2,borderRadius:10}}
           fullWidth
          >
          Switch to {isSignup ? "Login" : "Signup"}
          </Button>
        )}

        </Box>
        </form>
        </Dialog>
        </Box>
    )
}

export default AuthForm