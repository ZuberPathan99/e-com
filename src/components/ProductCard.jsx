import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Box, Rating } from '@mui/material';
import ProductModal from './ProductModal';

function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card 
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          transition: '0.3s',
          '&:hover': {
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
          sx={{ objectFit: 'cover' }}
          onClick={() => setIsModalOpen(true)}
        />
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Box>
            <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', height: '2.5em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, height: '3em', overflow: 'hidden' }}>
              {product.shortDescription}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
              ${product.price}
            </Typography>
            <Rating name="read-only" value={product.rating || 4} readOnly size="small" />
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="small" 
            fullWidth
            sx={{
              borderRadius: '20px',
              textTransform: 'none',
              fontWeight: 'bold'
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      {isModalOpen && (
        <ProductModal product={product} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}

export default ProductCard;