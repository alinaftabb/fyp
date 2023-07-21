import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Main from './layouts/HomePage';
import Auth from './layouts/Auth';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Main />}>
        <Route index element={<HomePage />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Route>
      <Route path='/' element={<Auth />}>
        <Route path='sign-up' element={<SignUp />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Route>
  )
);
export default router;
