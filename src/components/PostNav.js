import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Logo from '../media/logo2.png';
import { CardMedia, Typography } from '@mui/material';
import { AccountCircle, Search } from '@mui/icons-material';
import Drawer from '../components/Drawer';
import { useNavigate } from 'react-router-dom';

const ProductNav = () => {
  const [drawer, setDrawer] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const nav = useNavigate();

  const toggleSearchBar = () => {
    setShowSearchBar(prevState => !prevState);
  };

  return (
    <div className='nav'>
      <CardMedia image={Logo} alt='logo' component={'img'} className='logo' />
      <Drawer drawer={drawer} setDrawer={setDrawer} />{' '}
      {showSearchBar && <SearchBar />}
      <div className='icons'>
        <Search className='icon' onClick={toggleSearchBar} />
        <AccountCircle className='icon' onClick={() => setDrawer(true)} />
      </div>
    </div>
  );
};

export default ProductNav;
