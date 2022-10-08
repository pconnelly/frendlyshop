import React from 'react';
import { useParams  } from 'react-router-dom'; 
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/cartSlice';


import CommonLayout from '../../layouts/common/layout';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // const [products, setProducts] = React.useState(null);
  const product = {
    id: 1,
    name: 'nice dress',
    description: 'a very nice dress',
    price: '500 NOK',
    images: [
      "https://frend.centraqa.com/client/dynamic/images/91_1061e8dd77-productimages-02-full.jpg",
      "https://frend.centraqa.com/client/dynamic/images/91_dd2117a556-productimages-03-full.jpg"
    ]
  }

  React.useEffect(() => {
    axios.get(`/products/${id}`).then((response) => {
      // setProducts(response.data);
    });
  }, [id]);

  return (
    <CommonLayout title={product.name}>
      <div id="product-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {product?.images?.map((image, i) => (
            <div key={i} className="carousel-item active">
              <img className="d-block w-100" src={image} alt={`Slide ${i + 1}`} />
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          {/* <span className="sr-only">Previous</span> */}
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          {/* <span className="sr-only">Next</span> */}
        </a>
      </div>
      <button type="button" className="align-self-end" onClick={() => dispatch(addItem(product))}>Add to Cart</button>
      <p>{product.description}</p>
    </CommonLayout>
  );
};

export default Product;