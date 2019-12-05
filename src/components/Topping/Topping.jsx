import React from 'react';
import './Topping.css';
import getToppingByName from '../../helpers/getToppingByName';

class Topping extends React.Component {
  constructor(props) {
    super(props);
  }

  getSelectedTopping() {
    const { selectedToppings, name } = this.props;

    return getToppingByName(name, selectedToppings);
  }

  getToppingClassName() {
    const className = 'topping';

    const selectedTopping = this.getSelectedTopping();

    const active = selectedTopping && selectedTopping.amount > 0;

    if (active) {
      return `${className} topping--active`;
    }

    return className;
  }

  getAmount() {
    const selectedTopping = this.getSelectedTopping();

    return selectedTopping ? selectedTopping.amount : 0;
  }

  render() {
    const { name, price, srcImg, onAmountAdd, onAmountMinus } = this.props;

    return (
      <div 
        data-testid="topping"
        className={this.getToppingClassName()} 
      >
        <img src={srcImg} alt={name} data-testid="topping-srcImg" />
        <span data-testid="topping-name">{name}</span>
        <div className="topping__amount">
          <button type="button" data-testid="topping-amountMinus" onClick={() => onAmountMinus(name)}>-</button>
          <span data-testid="topping-amount">{this.getAmount()}</span>
          <button type="button" data-testid="topping-amountAdd" onClick={() => onAmountAdd({ name, price })}>+</button>
        </div>
      </div>
    );
  }
}

export default Topping;
