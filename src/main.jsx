import React from 'react';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './Redux/store.js';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import FavoriteBook from './components/favoriteBook.jsx';
import AllBook from './components/AllBook.jsx';
const root = createRoot(document.getElementById('root'));


const router = createBrowserRouter([

  {
    path: "/",
    element: < Home/>,
  },
  {
    path: "/fav-book",
    element: < FavoriteBook/>,
  },
  {
    path: "/all-book",
    element: < AllBook/>,
  },

]);


root.render(
  <Provider store={store}>
  <RouterProvider router={router} >
    <App />
  </RouterProvider>
  </Provider>
);
