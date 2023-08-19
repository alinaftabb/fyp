import React, { useEffect, useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { search } from '../store/slices/SearchSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(search(e.target.value));
  };

  return (
    <div className='searchbar'>
      <TextField
        id='search'
        fullWidth
        type='text'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <Search />
            </InputAdornment>
          ),
        }}
        label='Search...'
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
