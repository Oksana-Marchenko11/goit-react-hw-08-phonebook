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
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Navigation } from './Navigation';

const defaultTheme = createTheme();

export const Layout = () => {
  // const isUserLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <AppBar position="static">
          <Navigation />
        </AppBar>
        <Container component="main" sx={{ mt: 8, mb: 'auto' }}>
          <Outlet />
        </Container>
        <AppBar position="static" sx={{ mt: '100px' }}>
          <Box component="footer" sx={{ py: 3, mt: 'auto' }}>
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
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
