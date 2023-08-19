import React from 'react';
import { Card, Typography } from '@mui/material';

const Quotes = ({ quote: { id, quote, author } }) => {
  return (
    <Card className='quote-card'>
      <Typography component='p' className='quote'>
        {quote}
      </Typography>
      <Typography component='p' className='author'>
        ~ {author}
      </Typography>
    </Card>
  );
};

export default Quotes;
