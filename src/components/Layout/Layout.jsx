import React from 'react';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Box,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Navigation } from '../Navigation/Navigation';

const defaultTheme = createTheme();

export const Layout = () => {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My PhoneBook
            </Typography>
            <Navigation />
            {isUserLoggedIn && <UserMenu />}
          </Toolbar>
        </AppBar>
        <Container component="main" sx={{ mt: 8, mb: 2 }}>
          <Outlet />
        </Container>
        <Box component="footer" sx={{ py: 3, mt: 'auto' }}>
          <Typography variant="body2" color="text.secondary" align="center">
            А це футер
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
