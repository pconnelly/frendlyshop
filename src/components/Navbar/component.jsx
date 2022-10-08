import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles.scss';

const Navbar = ({children, ...props}) => {
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link 
          to={{pathname: '/'}}
          className="navbar-brand"
          >
            Frendly Shop
        </Link>

        <div>
          <Link 
            className="cart-link__screen-lg position-relative mx-5"
            to={{pathname: '/checkout'}}
          >
            Cart
            {cart.count > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
               {cart.count}
              </span>
            )}
          </Link>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarContents" 
            aria-controls="navbarContents" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarContents">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <Link 
              to={{pathname: '/'}}
              className="nav-link"
              >
                Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to={{pathname: '/products', search: 'category=dresses'}}
              className="nav-link"
              >
                Dresses
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to={{pathname: '/products', search: 'category=skirts'}}
              className="nav-link"
              >
                Skirts
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to={{pathname: '/products', search: 'category=tops'}}
              className="nav-link"
              >
                Tops
            </Link>
          </li>
          </ul>
          <Link 
            className="position-relative mx-5"
            to={{pathname: '/checkout'}}
          >
            Cart
            {cart.count > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
               {cart.count}
              </span>
            )}
          </Link>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;