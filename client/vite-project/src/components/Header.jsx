import React, { useState } from 'react';
import { AppBar, Box, IconButton, Tab, Tabs, Toolbar } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminActions, userActions } from '../store';

const Header = () => {
    const dispatch = useDispatch();
    const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
    const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const [value, setValue] = useState(0);

    const logout = (isAdmin) => {
        dispatch(isAdmin ? adminActions.logout() : userActions.logout());
    };

    return (
        <AppBar position='sticky' sx={{ bgcolor: "#E35A00" }}>
            <Toolbar>
                <Box width={'30%'}>
                    <IconButton component={Link} to="/">
                        <FastfoodIcon />
                    </IconButton>
                </Box>

                <Box display={'flex'} style={{ marginLeft: 'auto' }} >
                    <Tabs
                        
                        textColor='white'
                        indicatorColor='secondary'
                        value={value}
                        onChange={(e, value) => setValue(value)}
                        
                    >
                        <Tab component={Link} to="/foods" label="Foods" />
                        {/* if user or admin is not logged in, show these Default */}
                        {!isAdminLoggedIn && !isUserLoggedIn && (
                            <>
                                <Tab component={Link} to="/auth" label="Login" />
                                <Tab component={Link} to="/admin" label="Admin" />
                            </>
                        )}
                        {isUserLoggedIn && (
                            <>
                                <Tab component={Link} to="/user" label="Profile" />
                                <Tab onClick={() => logout(false)} component={Link} to="/" label="Logout" />
                            </>
                        )}
                        {isAdminLoggedIn && (
                            <>
                                <Tab component={Link} to="/add" label="ADD FOOD" />
                                <Tab component={Link} to="/user-admin" label="Profile" />
                                <Tab onClick={() => logout(true)} component={Link} to="/" label="Logout" />
                            </>
                        )}
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
