import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import myImage from '../PhoneBook.jpg';

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // height: '100vh',
        // backgroundSize: 'cover',
      }}
    >
      <Typography sx={{ fontSize: '48px', fontWeight: 600 }}>
        Error 404 - Page not found
      </Typography>
      <Typography sx={{ fontSize: '28px', fontWeight: 400 }}>
        <NavLink to="/" variant="body2">
          {'Return to Home Page'}
        </NavLink>
      </Typography>
      <img src={myImage} alt="Phone System" style={{ width: '100%' }} />
    </div>
  );
};

export default NotFound;
