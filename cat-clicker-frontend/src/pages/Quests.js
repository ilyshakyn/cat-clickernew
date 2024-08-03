// src/pages/Quests.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Quests = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Quests
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Complete quests to earn rewards!
      </Typography>
    </Container>
  );
};

export default Quests;
