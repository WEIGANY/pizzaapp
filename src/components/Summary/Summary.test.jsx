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

    const expectValue = number_format(pizzaPrice + (topping1Price * topping1Amount) + (topping2Price * topping2Amount),2,".",",");
    expect(getByTestId('summary-total').textContent).toBe(`$${expectValue}`);
  });
});

function number_format(number, decimals, dec_point, thousands_sep) {
  /*
  * 参数说明：
  * number：要格式化的数字
  * decimals：保留几位小数
  * dec_point：小数点符号
  * thousands_sep：千分位符号
  * */
  number = (number + '').replace(/[^0-9+-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
      dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
      s = '',
      toFixedFix = function (n, prec) {
          var k = Math.pow(10, prec);
          return '' + Math.ceil(n * k) / k;
      };

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  var re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
      s[0] = s[0].replace(re, "$1" + sep + "$2");
  }

  if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}