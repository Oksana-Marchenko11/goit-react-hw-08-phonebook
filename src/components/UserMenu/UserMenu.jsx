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
    // <Box sx={{ flexGrow: 1 }}>
    //   <Toolbar>
    //     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //       {userEmail}
    //     </Typography>
    //     <Button color="inherit" onClick={handleLogout} disabled={isLoading}>
    //       Logout
    //     </Button>
    //   </Toolbar>
    // </Box>
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          onClick={handleOpenUserMenu}
          // sx={{ p: 0 }}
        >
          {userEmail}
        </Typography>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleLogout} disabled={isLoading}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
