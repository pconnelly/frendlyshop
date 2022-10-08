import React from 'react';
import { useParams  } from 'react-router-dom'; 
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/cartSlice';


import CommonLayout from '../../layouts/common/layout';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    axios.get(`https://frend.rest/case/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  return (
    <CommonLayout title={product?.name}>
      {!product ? (<p>Loading...</p>) : (
        <>
          <div id="product-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {product?.images?.map((image, i) => (
                <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                  <img className="d-block w-100" src={image} alt={`Slide ${i + 1}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#product-carousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#product-carousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className='d-flex flex-column'>
            <p>{product.description}</p>
            <button type="button" className="btn btn-primary align-self-end mt-auto" onClick={() => dispatch(addItem(product))}>Add to Cart</button>
          </div>
        </>
      )}
    </CommonLayout>
  );
};

export default Product;