import React from 'react';

const Button = ({children, ...props}) => {

  return (
    <>
      <footer className="pt-3 mt-4 text-muted border-top">
        &copy; 2022
      </footer>
    </>
  )
};

export default Button;