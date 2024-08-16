// src/components/AuthDialog.jsx
import React, { useState, useContext } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Box, Typography, Link, Alert } from '@mui/material';
import { AuthContext } from '../context/AuthContext';

function AuthDialog() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { isAuthDialogOpen, closeAuthDialog, login, signup, authMode, setAuthMode, error } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authMode === 'login') {
      login(email, password);
    } else {
      signup(name, email, password);
    }
  };

  const toggleAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
  };

  return (
    <Dialog open={isAuthDialogOpen} onClose={closeAuthDialog}>
      <DialogTitle>{authMode === 'login' ? 'Login' : 'Sign Up'}</DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          {authMode === 'signup' && (
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
            />
          )}
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            {authMode === 'login' ? 'Login' : 'Sign Up'}
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            {authMode === 'login' ? "Don't have an account? " : "Already have an account? "}
            <Link component="button" variant="body2" onClick={toggleAuthMode}>
              {authMode === 'login' ? 'Sign Up' : 'Login'}
            </Link>
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default AuthDialog;