import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser, selectIsLoading } from '../../redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

export const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userEmail = user?.email ?? "Couldn't get email";
  const isLoading = useSelector(selectIsLoading);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/login');
  };

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{ p: 0, ml: -10, color: 'white' }}
        >
          <AccountCircle sx={{ fontSize: '2rem' }} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '70px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Typography sx={{ p: '8px' }} textAlign="center">
          {userEmail}
        </Typography>
        <MenuItem onClick={handleLogout} disabled={isLoading}>
          <Typography ptextAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
