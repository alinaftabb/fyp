import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import API from '../api';
import ProductCard from '../components/ProductCard';
import ProductNav from '../components/ProductNav';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductCategoryListing = () => {
  const loc = useLocation();
  const category = loc.state.category;

  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [productFound, setProductFound] = useState(true);
  const searchItem = useSelector(state => state.search);
  const nav = useNavigate();

  const getProducts = async () => {
    try {
      const res = await API.get(`/products/category/${category}`);
      setProducts(res.data.products);
      setFilteredProduct(res.data.products);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setFilteredProduct(
      products.filter(cat => {
        return cat.title.match(searchItem);
      })
    );
  }, [searchItem]);

  // const getSearchItems = searchedItems => {
  //   if (searchedItems.length === 0) setProductFound(false);
  //   else setProductFound(true);
  //   setFilteredProduct(searchedItems);
  // };

  const handleClick = id => {
    nav(`/product`, { state: { product: id } });
  };

  return (
    <div>
      <ProductNav />
      <div style={{ overflow: 'auto', height: '85vh' }}>
        <Typography
          variant='h2'
          sx={{
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            margin: '20px',
            fontWeight: 'bold',
          }}
        >
          {category.toUpperCase().split('-').join(' ')}
        </Typography>
        <div className='product-container'>
          {filteredProduct.map(pro => (
            <ProductCard product={pro} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryListing;
