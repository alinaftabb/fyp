import { ShoppingCart } from '@mui/icons-material';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

const ProductCard = ({ product, handleClick }) => {
  return (
    <Card className='product-card' onClick={() => handleClick(product.id)}>
      <CardActionArea>
        <CardMedia
          src={product.thumbnail}
          component={'img'}
          className='image'
        />
        <CardContent className='content'>
          <Typography variant='subtitle2' className='title'>
            {product.title}
          </Typography>
          <Typography variant='subtitle' className='price'>
            ${product.price}
          </Typography>
          <Button className='btn'>
            <ShoppingCart />
            &nbsp; Add to Cart
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
