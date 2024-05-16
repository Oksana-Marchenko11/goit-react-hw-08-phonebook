import React from 'react';
import {
  Container,
  AppBar,
  Typography,
  CssBaseline,
  Box,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

const defaultTheme = createTheme();

export const Layout = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          justifyContent: 'space-between',
        }}
      >
        <AppBar position="static">
          <Navigation />
        </AppBar>
        <Container component="main">
          <Outlet />
        </Container>
        <Box
          component="footer"
          sx={{
            py: 3,
            bgcolor: 'primary.main',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary" align="center">
            Contact us.
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Email: example@email.com
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Phone: +987654321
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
