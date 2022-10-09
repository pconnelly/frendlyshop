import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { getProducts } from '../../services/Products';
import CommonLayout from '../../layouts/common/layout';
import ProductCard from '../../components/ProductCard/component';

const Products = (props) => {
  const [search] = useSearchParams();
  const [products, setProducts] = React.useState(null);

  const category = search.get('category');

  React.useEffect(() => {
    getProducts(category).then((response) => {
      setProducts(response.data);
    });
  }, [category, search]);

  return (
    <CommonLayout title={category}>
      <div className='products--list row gy-5'>
        {products?.map((product) => (
          <ProductCard columns="col-xs-12 col-sm-3" key={`product-${product.id}`} product={product}/>
        ))}
      </div>
    </CommonLayout>
  );
};

export default Products;