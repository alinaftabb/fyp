import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const Category = ({ cat, handleClick }) => {
  return (
    <Card className='category-card' onClick={() => handleClick(cat)}>
      <CardContent className='content'>
        <Typography variant='h5'>
          {cat.toUpperCase().split('-').join(' ')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Category;
