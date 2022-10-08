import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product, columns}) => {

  return (
    <div className={columns || ''}>
      <div className="card h-100">
        <img 
          className="card-img-top" 
          src={product.images[0]} 
          alt="Dress placeholder"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            {product.description}
          </p>
          <p className="card-text">
            {product.price}
          </p>
          {product.stock === 0 && (
            <p className="card-text">
              Sold out!
            </p>
          )}
          <div className='d-flex flex-row align-self-end mt-auto'>
            <Link to={{pathname: `/products/${product.id}`}} className="btn btn-primary">Details</Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductCard;