import axios from 'axios';

const ACCESS_KEY = '10A-jswr30PYGxzWRhZjDxSdmNNoLI37fpuZIp-P4gk';
const API_URL = 'https://api.unsplash.com/photos/random';

export async function fetchProducts() {
  try {
    const response = await axios.get(API_URL, {
      params: {
        count: 30,
      },
      headers: {
        'Authorization': `Client-ID ${ACCESS_KEY}`
      }
    });

    return response.data.map(item => ({
      id: item.id,
      name: item.alt_description || 'Product Name',
      price: (Math.random() * 100).toFixed(2),
      shortDescription: item.description?.slice(0, 50) + '...' || 'Short description',
      fullDescription: item.description || 'Full product description goes here.',
      image: item.urls.small,
      largeImage: item.urls.regular,
      category: item.user.name || 'Category',
      reviews: [
        item.user.bio || 'Great product!',
        'Would buy again.',
        'Excellent quality.'
      ]
    }));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
}