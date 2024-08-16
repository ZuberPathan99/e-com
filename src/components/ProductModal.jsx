import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Grid,
  Box,
  Divider,
} from '@mui/material';

function ProductModal({ product, onClose }) {
  return (
    <Dialog open={true} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Typography variant="h5" component="div" fontWeight="bold" gutterBottom>
          {product.name}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={product.largeImage}
              alt={product.name}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography variant="h6" color="primary" fontWeight="bold">
                ${product.price}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Category: <strong>{product.category}</strong>
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" color="textSecondary">
                {product.fullDescription}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" fontWeight="bold">
                User Reviews
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'none',
                  p: 0,
                  m: 0,
                  color: 'textSecondary',
                  '& li': {
                    mb: 1,
                    pl: 1,
                    '&::before': {
                      content: '"•"',
                      color: 'primary.main',
                      fontWeight: 'bold',
                      display: 'inline-block',
                      width: '1em',
                      marginLeft: '-1em',
                    },
                  },
                }}
              >
                {product.reviews.map((review, index) => (
                  <li key={index}>{review}</li>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between', p: 2 }}>
        <Button variant="contained" color="primary" onClick={onClose}>
          Back to List
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProductModal;
