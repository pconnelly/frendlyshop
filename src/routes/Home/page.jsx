import React from 'react';
import { Link } from 'react-router-dom';
import CommonLayout from '../../layouts/common/layout';

const Home = () => {

  return (
    <CommonLayout className="home__container">
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light border rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Frendly Shop</h1>
            <p className="col-md-8 fs-4">Buy something beautiful.</p>
            <button className="btn btn-primary btn-lg" type="button">Clothing</button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-4">
            <div className="d-flex flex-column h-100 p-5 bg-light border rounded-3">
              <h2>Dresses</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
              </p>              
              <Link 
                to={{pathname: '/products', search: 'category=dresses'}} 
                className="btn btn-outline-secondary align-self-end mt-auto" 
                type="button">
                  Shop
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-column h-100 p-5 bg-light border rounded-3">
              <h2>Skirts</h2>
              <p>    
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.                
              </p>
              <Link 
                to={{pathname: '/products', search: 'category=skirts'}} 
                className="btn btn-outline-secondary align-self-end mt-auto" 
                type="button">
                  Shop
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-column h-100 p-5 bg-light border rounded-3">
              <h2>Tops</h2>
              <p>
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
                amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut..
              </p>
              <Link 
                to={{pathname: '/products', search: 'category=tops'}} 
                className="btn btn-outline-secondary align-self-end mt-auto" 
                type="button">
                  Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default Home;