import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

const Home = lazy(() => import('./routes/Home'));
const Products = lazy(() => import('./routes/Products'));
const Product = lazy(() => import('./routes/Product'));
const Checkout = lazy(() => import('./routes/Checkout'));
const NotFound = lazy(() => import('./routes/NotFound'));

const App = () => (
  <div id='app'>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/checkout/" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  </div>
);

export default App;
