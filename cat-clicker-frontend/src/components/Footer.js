// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary">
        © 2024 Cat Tap Clicker
      </Typography>
    </Box>
  );
};

export default Footer;
