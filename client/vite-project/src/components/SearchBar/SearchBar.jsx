import React from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import "./SearchBar.css";

const SearchBar = ({ handleSearch }) => {
  return (
      <Box width="60%" sx={{my:'2rem'}}>
          <TextField 
              className='searchBar' 
              fullWidth 
              sx={{background:'white', borderRadius:'0.8rem'}} 
              placeholder='Search for restaurants, cuisine or dish'
              onChange={handleSearch}
          />
      </Box>
  )
}

export default SearchBar;
