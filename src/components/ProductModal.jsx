import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Grid } from '@mui/material';

function ProductModal({ product, onClose }) {
  return (
    <Dialog open={true} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{product.name}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={product.largeImage} alt={product.name} style={{ width: '100%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">${product.price}</Typography>
            <Typography variant="subtitle1">Category: {product.category}</Typography>
            <Typography variant="body1">{product.fullDescription}</Typography>
            <Typography variant="h6" style={{ marginTop: '1rem' }}>User Reviews</Typography>
            <ul>
              {product.reviews.map((review, index) => (
                <li key={index}>{review}</li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Back to List</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProductModal;