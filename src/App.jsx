import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Header from './components/Header';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import { useProducts } from './hooks/useProducts';
import AuthDialog from './components/AuthDialog';
import { AuthProvider } from './context/AuthContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { products, loading, error } = useProducts();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Header />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <SearchBar onSearch={setSearchTerm} />
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && (
            <ProductList products={filteredProducts} />
          )}
        </Container>
        <AuthDialog />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;