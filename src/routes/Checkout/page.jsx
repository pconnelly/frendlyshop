import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItem, removeItem, emptyCart } from '../../store/cartSlice';


import CommonLayout from '../../layouts/common/layout';

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const finishPurchase = React.useCallback(() => {
    dispatch(emptyCart());
    navigate('/');
  }, [dispatch]);

  return (
    <CommonLayout title="Checkout">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
        </h4>
        <ul className="list-group mb-3">
          {Object.entries(cart.items).map(([id, product]) => (
            <li key={id} className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">{product.name}</h6>
              </div>
              <span className="text-muted">{product.price}</span>
              <span className="text-muted">{cart.items[id].count}</span>
              <div className="btn-group" role="group" aria-label="Basic example">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => dispatch(addItem(product))}
                  >
                    +
                  </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => dispatch(removeItem(product))}
                >
                  -
                </button>
              </div>
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-between">
            <span>Total</span>
            <strong>{cart.total} NOK</strong>
          </li>
        </ul>
        <div className='d-flex flex-row-reverse'>
          <button 
            type='button' 
            className='btn btn-primary'
            onClick={finishPurchase}
          >
            Finish Purchase
          </button>
        </div>
    </CommonLayout>
  );
};

export default Checkout;