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
          <span>${number_format(price * amount,2,".",",")}</span>
        </Item>   
      ))}    
    </ItemsList>
    <hr />
    <Item as="p">
      <span>Total:</span>
      <span data-testid="summary-total">
        ${selectedToppings.reduce((previousValue, currentValue) => {
          return number_format(previousValue + currentValue.price * currentValue.amount,2,".",",");
        }, price)}
      </span>
    </Item>
  </div>
);

export default Summary;
