// src/context/AuthContext.jsx
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    // Simulate API call
    try {
      // In a real app, you'd make an API call here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

      // Check if user exists (this would be done on the server in a real app)
      const storedUser = localStorage.getItem(email);
      if (!storedUser) {
        throw new Error('User not found');
      }

      const userData = JSON.parse(storedUser);
      if (userData.password !== password) {
        throw new Error('Incorrect password');
      }

      setUser(userData);
      setIsAuthenticated(true);
      setIsAuthDialogOpen(false);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const signup = async (name, email, password) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

      // Check if user already exists (this would be done on the server in a real app)
      if (localStorage.getItem(email)) {
        throw new Error('User already exists');
      }

      // Store user data (in a real app, this would be done on the server)
      const userData = { name, email, password };
      localStorage.setItem(email, JSON.stringify(userData));

      setError(null);
      setAuthMode('login'); // Switch to login mode after successful signup
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const openAuthDialog = (mode) => {
    setAuthMode(mode);
    setIsAuthDialogOpen(true);
    setError(null);
  };

  const closeAuthDialog = () => {
    setIsAuthDialogOpen(false);
    setError(null);
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      user,
      login,
      signup,
      logout,
      isAuthDialogOpen,
      openAuthDialog,
      closeAuthDialog,
      authMode,
      setAuthMode,
      error
    }}>
      {children}
    </AuthContext.Provider>
  );
};