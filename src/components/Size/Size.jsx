import React from 'react';
import size from '../../assets/size.png';
import './Size.css';

function getClassName(name, { name: thisName }) {
  const className = `size size--${name}`;

  if (name === thisName) {
    return `${className} size--active`;
  }

  return className;
}

const Size = ({
  name,
  price,
  selectedSize,
  onSizeSelect,
}) => (
  <div 
    key={name} 
    className={getClassName(name, selectedSize)}
    onClick={() => onSizeSelect({ name, price })}
  >
    <img src={size} alt={name} />
    <div>
      {name}
      <br />
      <span className="size__price">${price}</span>
    </div>
  </div>
);

export default Size;