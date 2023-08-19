import React, { useEffect, useState } from 'react';
import API from '../api';
import ProductNav from '../components/ProductNav';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Products = () => {
  const searchItem = useSelector(state => state.search);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const nav = useNavigate();

  const getAllProducts = async () => {
    try {
      const res = await API.get('/products');
      setProducts(res.data.products);
      setFilteredProducts(res.data.products);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleClick = id => {
    nav(`/product`, { state: { product: id } });
  };
  useEffect(() => {
    setFilteredProducts(
      products.filter(cat => {
        return cat.title.match(searchItem);
      })
    );
  }, [searchItem]);

  return (
    <div style={{ height: '100vh', overflow: 'auto' }}>
      <ProductNav />
      <div className='product-container'>
        {filteredProducts.map(pro => (
          <ProductCard product={pro} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Products;
