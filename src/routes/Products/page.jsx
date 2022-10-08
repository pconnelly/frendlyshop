import React from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from "axios";

import CommonLayout from '../../layouts/common/layout';
import ProductCard from '../../components/ProductCard/component';

const Products = (props) => {
  const [search] = useSearchParams();
  // const [products, setProducts] = React.useState(null);
  const products = [
    {
      id: 1,
      name: 'dress',
      description: 'a very nice dress',
      price: '1500 NOK',
      images: ['','']
    }, 
    {
      id: 2,
      name: 'dress',
      description: 'a very nice dress',
      price: '1100 NOK',
      images: ['','']
    }, 
    {
      id: 3,
      name: 'dress',
      description: 'a very nice dress',
      price: '2500 NOK',
      images: ['','']
    }, 
    {
      id: 4,
      name: 'dress',
      description: 'a very nice dress',
      price: '500 NOK',
      images: ['','']
    }
  ];

  React.useEffect(() => {
    axios.get('/products').then((response) => {
      // setProducts(response.data);
    });
  }, []);

  return (
    <CommonLayout title={search.get('category')}>
      <div className='products--list row gy-5'>
        {products?.map((product) => (
          <ProductCard columns="col-xs-12 col-sm-6" key={`product-${product.id}`} product={product}/>
        ))}
      </div>
    </CommonLayout>
  );
};

export default Products;