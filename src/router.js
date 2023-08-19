import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';
import Main from './layouts/HomePage';
import Auth from './layouts/Auth';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import ProductCategory from './pages/ProductCategory';
import Posts from './pages/Posts';
import PostLayout from './layouts/Post';
import Todos from './pages/Todos';
import ProductCategoryListing from './pages/ProductCategoryListing';
import ProductDetail from './pages/ProductDetail';
import UserProfile from './pages/UserProfile';
import Products from './pages/Products';
import PostDetail from './pages/PostDetail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Main />}>
        <Route index element={<HomePage />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='categories' element={<ProductCategory />} />
        <Route path='category' element={<ProductCategoryListing />} />
        <Route path='product' element={<ProductDetail />} />
        <Route path='products' element={<Products />} />
        <Route path='user-profile' element={<UserProfile />} />
        <Route path='/' element={<PostLayout />}>
          <Route path='posts' element={<Posts />} />
          <Route path='post-detail' element={<Navigate to='/posts' />} />
          <Route path='post-detail/:postId' element={<PostDetail />} />
        </Route>

        <Route path='todos' element={<Todos />} />
      </Route>
      <Route path='/' element={<Auth />}>
        <Route path='sign-up' element={<SignUp />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Route>
  )
);
export default router;
