import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import FoodItem from './Foods/FoodItem';
import { Link } from 'react-router-dom';
import { getAllFood } from '../Api-helpers/api-helpers';
import Banner from './Banner/Banner';
import FoodStatic from './FoodStatic/FoodStatic';
import Footer from './Footer/Footer';

const HomePage = () => {
    const [foods, setFoods] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); 
    const [filteredFoods, setFilteredFoods] = useState([]); 

    useEffect(() => {
        getAllFood()
            .then((data) => setFoods(data.foods))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const filtered = foods.filter(food => 
                food.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredFoods(filtered);
        } else {
            setFilteredFoods(foods.slice(0, 6));
        }
    }, [searchTerm, foods]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <Banner handleSearch={handleSearch} /> 
            <FoodStatic />
            <Box display="flex" margin="auto" width="80%" justifyContent="center" flexWrap="wrap">
                {filteredFoods && filteredFoods.map((item, index) => (
                    <FoodItem
                        id={item._id}
                        title={item.title}
                        price={item.price}
                        posterUrl={item.posterUrl}
                        key={index}
                    />
                ))}
            </Box>
            <Box display="flex" padding={5} margin="auto">
                <Button
                    component={Link}
                    to="/foods"
                    variant="outlined"
                    sx={{ margin: 'auto', color: "#2b2d32" }}
                >
                    VIEW ALL FOODS
                </Button>
            </Box>
            <Footer />
        </>
    );
};

export default HomePage;
