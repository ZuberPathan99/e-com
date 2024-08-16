import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', mb: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mr: 1 }}
      />
      <Button type="submit" variant="contained">Search</Button>
    </Box>
  );
}

export default SearchBar;