import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Summary from './Summary';

describe('Summary', () => {
  afterEach(cleanup);

  test('total', () => {
    const pizzaPrice = 8.99;
    const topping1Price = 0.99;
    const topping1Amount = 1;
    const topping2Price = 1.25;
    const topping2Amount = 3;

    const { getByTestId } = render((
      <Summary 
        selectedPizza={{ name: 'Pizza', price: pizzaPrice }} 
        selectedToppings={[{
          name: 'topping1',
          price: topping1Price,
          amount: topping1Amount,
        }, {
          name: 'topping2',
          price: topping2Price,
          amount: topping2Amount,
        }]} 
        onToppingAmountAdd={() => {}}
        onToppingAmountMinus={() => {}}
      />
    ));

    const expectValue = pizzaPrice + (topping1Price * topping1Amount) + (topping2Price * topping2Amount);
    expect(getByTestId('summary-total').textContent).toBe(`$${expectValue}`);
  });
});