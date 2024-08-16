import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AuthContext } from '../context/AuthContext';

function Header() {
  const { isAuthenticated, logout, openAuthDialog } = useContext(AuthContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          E-Shop
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" startIcon={<ShoppingCartIcon />}>
            Cart
          </Button>
          {isAuthenticated ? (
            <Button color="inherit" onClick={logout}>Logout</Button>
          ) : (
            <Button color="inherit" onClick={() => openAuthDialog('login')}>Login</Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;