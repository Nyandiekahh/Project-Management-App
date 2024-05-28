import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Task Management
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button component={Link} to="/tasks" color="inherit">Tasks</Button>
          <Button component={Link} to="/status" color="inherit">Status</Button>
          <Button component={Link} to="/logs" color="inherit">Logs</Button>
          <Button component={Link} to="/delegate" color="inherit">Delegate Task</Button>
          {user ? (
            <Button onClick={logout} color="inherit">Logout</Button>
          ) : (
            <Button component={Link} to="/login" color="inherit">Login</Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
