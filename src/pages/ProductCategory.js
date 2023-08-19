import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import CategoryCard from '../components/CategoryCard';
import ProductNav from '../components/ProductNav';
import { useSelector } from 'react-redux';

const ProductCategory = () => {
  const nav = useNavigate();
  const [category, setCategory] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [categoryFound, setCategoryFound] = useState(true);
  const searchItem = useSelector(state => state.search);

  const getCategory = async () => {
    try {
      const res = await API.get('/products/categories');
      setFilteredCategory(res.data);
      setCategory(res.data);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleClick = cat => {
    nav('/category', { state: { category: cat } });
  };

  useEffect(() => {
    setFilteredCategory(
      category.filter(cat => {
        return cat.match(searchItem);
      })
    );
  }, [searchItem]);

  return (
    <div>
      <ProductNav />
      <div className='category-container'>
        {categoryFound ? (
          filteredCategory.map((cat, index) => (
            <CategoryCard key={index} cat={cat} handleClick={handleClick} />
          ))
        ) : (
          <div className='not-found'>Category Not Found</div>
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
