// src/pages/UserProfile.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const UserProfile = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Profile
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        View and edit your profile!
      </Typography>
    </Container>
  );
};

export default UserProfile;
