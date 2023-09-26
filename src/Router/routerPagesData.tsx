import React from 'react';
import Cart from '../pages/Cart';
const Homescreen = React.lazy(async () => await import('../pages/Home'));
import Login from '../pages/Login';
import ProductDetails from '../pages/Product details/productDetails';
import Register from '../pages/Register';
import Loader from '../common/shared/Loader';

const pagesData = [
  {
    path: '/login',
    component: <Login />,
    title: 'Login'
  },
  {
    path: '/register',
    component: <Register />,
    title: 'Register'
  },
  {
    path: '/',
    component: 
    <React.Suspense fallback={<Loader />}>
      <Homescreen />
    </React.Suspense>,
    title: 'Home screen'
  },
  {
    path: '/cart',
    component: <Cart />,
    title: 'Cart'
  },
  {
    path: '/product/*',
    component: <ProductDetails />,
    title: 'product details'
  }
];
export default pagesData;
