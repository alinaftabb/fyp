import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1 className='WebName'>EditEase</h1>
      <nav className='HomeNav'>
        <NavLink to='/' className='item'>
          Home
        </NavLink>
        <NavLink to='/sign-up' className='item'>
          Signup
        </NavLink>
        <NavLink to='/sign-in' className='item'>
          Signin
        </NavLink>
      </nav>
    </div>
  );
};

export default HomePage;
