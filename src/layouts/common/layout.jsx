import React from 'react';
import Navbar from '../../components/Navbar/component';
import Footer from '../../components/Footer/component';
import './styles.scss';

const CommonLayout = ({title, children}) => {

  return (
    <div className="d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header>
        <Navbar />
      </header>
      <main>
        <div className='container'>
          {title && (
            <h1 style={{textTransform: 'capitalize'}}>{title}</h1>
          )}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
};

export default CommonLayout;