import React from 'react';

import './Card.css';

const Card = (props) => {
  const { customClass, children } = props;

  return (
    <div
      className={`p-4 m-2 relative border-2 border-transparent bg-gradient-to-r from-[#080509] to-[#1a171c] bg-clip-padding rounded-lg ${customClass}`}
    >
      {children && children}
    </div>
  );
};

export default Card;
