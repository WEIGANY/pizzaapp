import React from 'react';
import Title from '../Title';
import './Sizes.css';
import Size from '../Size';

const Sizes = ({
  sizes,
  selectedSize,
  onSizeSelect,
}) => (
  <div className="sizes">
    <Title>Select your size</Title>
    <div className="sizes__layout">
      {sizes.map(({ name, price }) => (
        <Size name={name} price={price} key={name} selectedSize={selectedSize} onSizeSelect={onSizeSelect} />
      ))}
    </div>
  </div>
);

export default Sizes;
