import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem, Typography, styled } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';

import { UserMenu } from './UserMenu';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const StyledMenuItem = styled(MenuItem)({
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
});
const CustomMenuItem = ({ to, children }) => {
  return (
    <StyledMenuItem>
      <NavLink to={to}>
        <Typography variant="inherit">{children}</Typography>
      </NavLink>
    </StyledMenuItem>
  );
};

export const Navigation = () => {
  const isLoggendIn = useSelector(selectIsLoggedIn);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Toolbar disableGutters>
      <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        LOGO
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          <CustomMenuItem to="/">Home</CustomMenuItem>,
          {isLoggendIn ? (
            <CustomMenuItem to="/contacts">Contacts</CustomMenuItem>
          ) : (
            <>
              <CustomMenuItem to="/register">Registrate</CustomMenuItem>
              <CustomMenuItem to="/login">LogIn</CustomMenuItem>
            </>
          )}
        </Menu>
      </Box>
      <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        LOGO
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <CustomMenuItem to="/">Home</CustomMenuItem>
        {isLoggendIn ? (
          <CustomMenuItem to="/contacts">Contacts</CustomMenuItem>
        ) : (
          <>
            <CustomMenuItem to="/register">Registrate</CustomMenuItem>
            <CustomMenuItem to="/login">LogIn</CustomMenuItem>
          </>
        )}
      </Box>
      {isLoggendIn && <UserMenu />}
    </Toolbar>
  );
};
