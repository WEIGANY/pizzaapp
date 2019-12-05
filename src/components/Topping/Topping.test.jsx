import React from 'react';
import sinon from 'sinon';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Topping from './Topping';

describe('Topping', () => {
  const name = 'Hello';
  const price = 10.99;
  const srcImg = './src/image.svg';

  afterEach(cleanup);

  test('render topping', () => {

    const { getByTestId } = render((
      <Topping 
        name={name} 
        price={price}
        srcImg={srcImg} 
        selectedToppings={[]}
        onAmountAdd={() => {}} 
        onAmountMinus={() => {}}
      />
    ));

    expect(getByTestId('topping-name').textContent).toBe(name);
    expect(getByTestId('topping-srcImg').alt).toBe(name);
  });

  test('amount minus', () => {
    const onAmountMinusSpy = sinon.spy();

    const { getByTestId } = render((
      <Topping 
        name={name} 
        price={price}
        srcImg={srcImg} 
        selectedToppings={[]}
        onAmountAdd={() => {}} 
        onAmountMinus={onAmountMinusSpy}
      />
    ));

    fireEvent.click(getByTestId('topping-amountMinus'));
    sinon.assert.calledOnce(onAmountMinusSpy);
    sinon.assert.calledWith(onAmountMinusSpy, name);
  });

  test('amount add', () => {
    const onAmountAddSpy = sinon.spy();

    const { getByTestId } = render((
      <Topping 
        name={name} 
        price={price}
        srcImg={srcImg} 
        selectedToppings={[]}
        onAmountAdd={onAmountAddSpy} 
        onAmountMinus={() => {}}
      />
    ));

    fireEvent.click(getByTestId('topping-amountAdd'));
    sinon.assert.calledOnce(onAmountAddSpy);
    sinon.assert.calledWith(onAmountAddSpy, { name, price });
  });

  test('selected', () => {
    const amount = 1;

    const { getByTestId } = render((
      <Topping 
        name={name} 
        price={price}
        srcImg={srcImg} 
        selectedToppings={[{ name, price, amount }]}
        onAmountAdd={() => {}} 
        onAmountMinus={() => {}}
      />  
    ));

    expect(getByTestId('topping').className).toBe('topping topping--active');
    expect(getByTestId('topping-amount').textContent).toBe(amount.toString());
  });
});