import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography sx={{ fontSize: '48px', fontWeight: 600 }}>
        Error 404 - Page not found
      </Typography>
    </Box>
  );
};

export default NotFound;
