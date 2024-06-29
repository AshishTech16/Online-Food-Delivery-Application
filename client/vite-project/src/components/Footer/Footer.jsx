import React from 'react';
import './Footer.css'; 
import { Box, Button, Typography } from '@mui/material';

const Footer = () => {
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="company-info">
          <h3>Foodiz &copy;</h3>
       
          <Box className="mern" mr={2}>
            <Typography variant="subtitle2" >
             <b>MERN POWERED APPLICATION &#9415;</b> 
            </Typography>
          </Box>
      
          <Box className="companyRights" marginTop={2} textAlign="center">
            <Typography variant="subtitle2">
              ALL RIGHTS ARE RESERVED BY THE OWNER.
            </Typography>
            <Typography variant="subtitle2">
              &copy; 2024. MADE BY ASHISH KUMAR.
            </Typography>
          </Box>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
