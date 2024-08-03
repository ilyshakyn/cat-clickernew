// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Cat Tap Clicker
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/quests">Quests</Button>
        <Button color="inherit" component={Link} to="/shop">Shop</Button>
        <Button color="inherit" component={Link} to="/profile">Profile</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

