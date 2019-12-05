import React from 'react';
import Toppings from './Toppings';
import { render, cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

test('render toppings', () => {
  const queries = render(<Toppings selectedToppings={[]} />);
  const { getAllByTestId } = queries;

  expect(getAllByTestId('topping').length).toBe(12);
});
