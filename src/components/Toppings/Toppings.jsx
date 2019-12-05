import React from 'react';
import Title from '../Title';
import './Toppings.css';
import Topping from '../Topping';
import anchovy from '../../assets/toppings/anchovy.svg';
import bacon from '../../assets/toppings/bacon.svg';
import chili from '../../assets/toppings/chili.svg';
import basil from '../../assets/toppings/basil.svg';
import mozzarella from '../../assets/toppings/mozzarella.svg';
import mushroom from '../../assets/toppings/mushroom.svg';
import olive from '../../assets/toppings/olive.svg';
import onion from '../../assets/toppings/onion.svg';
import pepper from '../../assets/toppings/pepper.svg';
import pepperoni from '../../assets/toppings/pepperoni.svg';
import peppers from '../../assets/toppings/peppers.svg';
import sweetcorn from '../../assets/toppings/sweetcorn.svg';

const Toppings = ({
  selectedToppings,
  onAmountAdd,
  onAmountMinus,
}) => (
  <div className="toppings">
    <Title>Choose your toppings</Title>
    <div className="toppings__layout">
      {[{
        name: 'Anchovy',
        srcImg: anchovy, 
        price: 0.99,
      }, {
        name: 'Bacon',
        srcImg: bacon, 
        price: 0.99,
      }, {
        name: 'Chili',
        srcImg: chili, 
        price: 0.99,
      }, {
        name: 'Basil',
        srcImg: basil, 
        price: 0.99,
      }, {
        name: 'Mozzarella',
        srcImg: mozzarella, 
        price: 0.99,
      }, {
        name: 'Mushroom',
        srcImg: mushroom, 
        price: 0.99,
      }, {
        name: 'Olive',
        srcImg: olive, 
        price: 0.99,
      }, {
        name: 'Onion',
        srcImg: onion, 
        price: 0.99,
      }, {
        name: 'Pepper',
        srcImg: pepper, 
        price: 0.99,
      }, {
        name: 'Pepperoni',
        srcImg: pepperoni, 
        price: 0.99,
      }, {
        name: 'Peppers',
        srcImg: peppers, 
        price: 0.99,
      }, {
        name: 'Sweetcorn',
        srcImg: sweetcorn, 
        price: 0.99,
      }].map(({ name, price, srcImg }) => (
        <Topping 
          key={name} 
          name={name} 
          price={price}
          srcImg={srcImg} 
          selectedToppings={selectedToppings}
          onAmountAdd={onAmountAdd} 
          onAmountMinus={onAmountMinus}
        />
      ))}
    </div>
  </div>
);

export default Toppings;
