import React from 'react';
import myImage from '../pbx-phone-system.jpeg';
import Box from '@mui/material/Box';

const HomePage = () => {
  return (
    <Box
      sx={{
        marginBottom: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <p style={{ fontSize: '28px', color: 'dark blue', fontWeight: '700' }}>
        Welcome to your personal Phonebook
      </p>
      <img src={myImage} alt="Phone System" style={{ width: '100%' }} />
    </Box>
  );
};

export default HomePage;
