// AddFoods PAGE.

import { Button, FormLabel, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Box } from '@mui/system';
import { addFood } from '../../Api-helpers/api-helpers';
import { useNavigate } from 'react-router-dom';

const labelProps = {
    mt: 1,
    mb: 1
};

const AddFoods = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        price: "",
        posterUrl: ""
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        addFood({ ...inputs }).then((res) => console.log(res)).catch((err) => console.log(err));
        setTimeout(()=>{
            navigate('/')
        },1500);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box width={'50%'} padding={10} margin="auto" display={"flex"} flexDirection='column' boxShadow={'10px 10px 20px #ccc'}>
                    <Typography textAlign={'center'} variant='h5' fontFamily={'Verdana'}> Add New Food</Typography>

                    <FormLabel sx={labelProps}>Title</FormLabel>
                    <TextField value={inputs.title} onChange={handleChange} name="title" variant='standard' margin='normal' />

                    <FormLabel sx={labelProps}>Description</FormLabel>
                    <TextField value={inputs.description} onChange={handleChange} name="description" variant='standard' margin='normal' />

                    <FormLabel sx={labelProps}>Price</FormLabel>
                    <TextField type="number" value={inputs.price} onChange={handleChange} name="price" variant='standard' margin='normal' />

                    <FormLabel sx={labelProps}>Poster Url</FormLabel>
                    <TextField type="url" value={inputs.posterUrl} onChange={handleChange} name="posterUrl" variant='standard' margin='normal' />

                    <Button type="submit" variant="contained" sx={{ width: "30%", margin: "auto", bgcolor: "#2b2b42", ":hover": { bgcolor: "#121217" }, color: "white" }}>
                        ADD NEW FOOD
                    </Button>
                </Box>
            </form>
        </div>
    );
};

export default AddFoods;
