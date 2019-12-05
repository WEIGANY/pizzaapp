import React from 'react';
import styled from 'styled-components';
import Title from '../Title';

const ItemAmount = styled.div`
  display: grid;
  grid-template-columns: auto 1.5rem auto;
  text-align: center;
  align-items: center;
  grid-gap: 0.25rem;

  button {
    --size: 1.5rem;

    border: 0;
    outline: 0;
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border-radius: 50%;
    height: var(--size);
    width: var(--size);
  }
`;

const ItemName = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.5rem;
  align-items: center;
  justify-items: start;
`;

const ItemsList = styled.ul`
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr auto;
`;

const Summary = ({
  selectedPizza: { name, price },
  selectedToppings,
  onToppingAmountAdd,
  onToppingAmountMinus,
}) => (
  <div>
    <Title>Summary</Title>
    <ItemsList>
      <Item>
        <ItemName>Pizza ({name})</ItemName>
        <span>${price}</span>
      </Item>
      {selectedToppings.map(({ name, price, amount }) => (
        <Item key={name}>
          <ItemName>
            <span>{name}</span>
            <ItemAmount>
              <button type="button" onClick={() => onToppingAmountMinus(name)}>-</button>
              <span>{amount}</span>
              <button type="button" onClick={() => onToppingAmountAdd({ name, price })}>+</button>
            </ItemAmount>
          </ItemName>
          <span>${price * amount}</span>
        </Item>   
      ))}    
    </ItemsList>
    <hr />
    <Item as="p">
      <span>Total:</span>
      <span data-testid="summary-total">
        ${selectedToppings.reduce((previousValue, currentValue) => {
          return previousValue + currentValue.price * currentValue.amount;
        }, price)}
      </span>
    </Item>
  </div>
);

export default Summary;
