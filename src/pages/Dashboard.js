import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import QuoteCard from '../components/QuoteCard';
import API from '../api';
import ProductNav from '../components/ProductNav';

const Dashboard = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentPageItems, setCurrentPageItems] = useState([]);
  const itemsPerPage = 10;
  let totalPages = 0;

  for (let i = 1; i <= Math.ceil(quotes.length / itemsPerPage); i++) {
    totalPages++;
  }
  const getQuotes = async () => {
    try {
      const response = await API.get('quotes');
      response.data.quotes.map(quote =>
        setQuotes(prevQuotes => [...prevQuotes, quote])
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const paginate = pageNumber => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentPageItems(quotes.slice(startIndex, endIndex));
  };

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    if (quotes.length > 0) {
      paginate(1);
    }
  }, [quotes]);

  return (
    <div>
      <ProductNav />
      <Pagination
        count={totalPages}
        variant='outlined'
        color='secondary'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '3vh',
          '& .MuiPaginationItem-root': {
            color: '#ffffff',
          },
          '& .css-1aczowp-MuiButtonBase-root-MuiPaginationItem-root': {
            fontWeight: 'bold',
            fontSize: '1.5rem',
            padding: '20px',
          },
        }}
        onChange={(event, value) => paginate(value)}
      />

      <div className='quote-container'>
        {currentPageItems?.map((quote, index) => (
          <QuoteCard quote={quote} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
