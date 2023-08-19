import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import API from '../api';
import ProductNav from '../components/ProductNav';
import { ShoppingCart, StarBorder, Star } from '@mui/icons-material';

import {
  Button,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

const ProductDetail = () => {
  const loc = useLocation();
  const proId = loc.state.product;

  const [product, setProduct] = useState();
  const [productImages, setProductImages] = useState();
  const [quantity, setQuantity] = useState(0);

  const getProductDetail = async () => {
    try {
      const res = await API.get(`products/${proId}`);
      setProduct(res.data);
      setProductImages(res.data.images);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  useEffect(() => {
    console.log(product);
  }, [product]);

  if (!product || !productImages) {
    // Handle loading or error state here
    return null;
  }

  const renderStars = rating => {
    const stars = [];
    const maxRating = 5;
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        i <= rating ? (
          <Star className='filled' />
        ) : (
          <StarBorder className='empty' />
        )
      );
    }
    return stars;
  };

  return (
    <div>
      <ProductNav />
      <Container
        style={{
          paddingTop: 20,
          overflow: 'auto',
          maxHeight: '87vh',
          maxWidth: '100vw',
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia
                component='img'
                image={product.thumbnail}
                alt={product.title}
                sx={{ width: '400px', height: '450px', objectFit: 'contain' }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h4' gutterBottom className='title'>
              {product.title}
            </Typography>
            <Typography variant='subtitle1' gutterBottom className='brand'>
              Brand: {product.brand}
            </Typography>
            <Divider />
            <Typography variant='body1' gutterBottom className='price'>
              <span className='new-price'>
                Price: $
                {(
                  product.price -
                  (product.discountPercentage * product.price) / 100
                ).toFixed(2)}
              </span>{' '}
              &nbsp;
              <span className='old-price'>${product.price.toFixed(2)}</span>
            </Typography>{' '}
            <Typography variant='body1' gutterBottom className='save'>
              You Save {product.discountPercentage}% ($
              {((product.discountPercentage * product.price) / 100).toFixed(2)})
            </Typography>
            <Typography
              variant='subtitle1'
              gutterBottom
              style={{ color: 'black', fontWeight: 'bold' }}
            >
              Size
            </Typography>
            <div className='size'>
              <div className='square c'>XS</div>
              <div className='square'>S</div>
              <div className='square c'>M</div>
              <div className='square'>L</div>
              <div className='square c'>XL</div>
            </div>
            <Typography
              variant='subtitle1'
              gutterBottom
              style={{
                color: 'black',
                marginTop: '10px',
                fontWeight: 'bold',
              }}
            >
              Quantity
            </Typography>
            <div className='qty'>
              <div
                className='square minus'
                onClick={() =>
                  setQuantity(quantity === 0 ? quantity : quantity - 1)
                }
              >
                -
              </div>
              <div className='rect'>{quantity}</div>
              <div
                className='square plus'
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </div>
              <Button className='add-to-cart'>
                <ShoppingCart />
                &nbsp; Add to Cart
              </Button>
            </div>
            <Typography variant='body1' gutterBottom className='desc'>
              {product.description}
            </Typography>
            <Typography variant='body1' gutterBottom className='heading'>
              Rating
            </Typography>
            <div className='star-rating'>
              <div className='stars'>{renderStars(product.rating)}</div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6' gutterBottom className='heading'>
              Product Images
            </Typography>
            <Grid container spacing={2} sx={{}}>
              {productImages.map((image, index) => (
                <Grid item xs={6} sm={2} key={index} sx={{ margin: '10px' }}>
                  <CardMedia
                    component='img'
                    image={image}
                    alt={`Product ${index}`}
                    sx={{ height: '200px', border: '2px solid black' }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductDetail;
