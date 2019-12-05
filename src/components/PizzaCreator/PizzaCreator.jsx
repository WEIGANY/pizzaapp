import React from 'react';
import './PizzaCreator.css';
import SubmitButton from '../SubmitButton';
import Details from '../Details';
import Sizes from '../Sizes';
import Toppings from '../Toppings';
import Summary from '../Summary/Summary';
import getToppingByName from '../../helpers/getToppingByName';
import ErrorMessage from '../ErrorMessage';

const SIZES = [{
  name: 'Small',
  price: 9.99,
}, {
  name: 'Medium',
  price: 10.99,
}, {
  name: 'Large',
  price: 11.99,
}];

class PizzaCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedToppings: [],
      selectedSize: SIZES[0],
      submitted: false,
      showAtLeastAToppingError: false,
      details: {
        name: 'Your name',
        email: '',
        confirmEmail: '',
        address: '',
        postCode: '',
        contactNumber: '',
      },
    }

    this.addSelectedToppingAmount = this.addSelectedToppingAmount.bind(this);
    this.minusSelectedToppingAmount = this.minusSelectedToppingAmount.bind(this);
    this.setSelectSize = this.setSelectSize.bind(this);
    this.setDetails = this.setDetails.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  setSelectedToppings(selectedToppings) {
    this.setState({
      selectedToppings,
    });
  }

  getSelectedTopping(name) {
    const { selectedToppings } = this.state;
    const selectedTopping = getToppingByName(name, selectedToppings);

    return selectedTopping;
  }

  updateSelectedToppingAmount(name, delta) {
    const { selectedToppings } = this.state;
    
    const newSelectedToppings = selectedToppings.map(selectedTopping => {
      if (selectedTopping.name === name) {
        selectedTopping.amount += delta;
        return selectedTopping;
      }

      return selectedTopping;
    });

    this.setSelectedToppings(newSelectedToppings);
  }

  addSelectedTopping(topping, amount) {
    const { selectedToppings } = this.state;

    const newSelectedToppings = [...selectedToppings, {
      ...topping,
      amount,
    }];

    this.setSelectedToppings(newSelectedToppings);
  }

  removeSelectedTopping(name) {
    const { selectedToppings } = this.state;

    const newSelectedToppings = selectedToppings.filter(({ name: thisName }) => thisName !== name);

    this.setSelectedToppings(newSelectedToppings);
  }

  addSelectedToppingAmount(topping, value = 1) {
    const { name } = topping;

    const selectedTopping = this.getSelectedTopping(name)

    if (selectedTopping) {
      this.updateSelectedToppingAmount(name, +value);
      return;
    }

    this.addSelectedTopping(topping, value);
  }

  minusSelectedToppingAmount(name, value = 1) {
    const selectedTopping = this.getSelectedTopping(name);
    
    if (!selectedTopping) {
      // Customer click on topping that amount is 0
      return;
    }

    const { amount } = selectedTopping;
    if (amount === value) {
      this.removeSelectedTopping(name);
      return;
    }

    this.updateSelectedToppingAmount(name, -value);
  }

  setSelectSize(selectedSize) {
    this.setState({
      selectedSize,
    })
  }

  setDetails(keyName, value) {
    const { details } = this.state;

    const newDetails = {
      ...details,
      [keyName]: value,
    };

    this.setState({
      details: newDetails,
    });
  }

  setShowAtLeastAToppingError(showAtLeastAToppingError) {
    this.setState({
      showAtLeastAToppingError,
    });
  }

  setSubmitted(submitted) {
    this.setState({
      submitted,
    })
  }

  onSubmit() {
    this.setSubmitted(true);

    const { details, selectedToppings, selectedSize } = this.state;
    
    if (!selectedToppings.length) {
      this.setShowAtLeastAToppingError(true);
      setTimeout(() => {
        this.setShowAtLeastAToppingError(false);
      }, 3000);
      return;
    }

    // talkToServer

    console.log('details', details);
    console.table(selectedToppings)
    console.log('selectedSize', selectedSize);
  }

  render() {
    const { 
      selectedToppings, 
      selectedSize, 
      details, 
      showAtLeastAToppingError,
      submitted,
    } = this.state;

    return (
      <form className="pizza-creator">
        {showAtLeastAToppingError && (
          <ErrorMessage>Please choose at least a topping to place order!</ErrorMessage>
        )}
        <Details 
          submitted={submitted}
          details={details}
          setDetails={this.setDetails}
        />
        <Sizes 
          sizes={SIZES}
          selectedSize={selectedSize}
          onSizeSelect={this.setSelectSize}
        />
        <Toppings 
          selectedToppings={selectedToppings} 
          onAmountAdd={this.addSelectedToppingAmount} 
          onAmountMinus={this.minusSelectedToppingAmount} 
        />
        <Summary 
          selectedPizza={selectedSize} 
          selectedToppings={selectedToppings} 
          onToppingAmountAdd={this.addSelectedToppingAmount}
          onToppingAmountMinus={this.minusSelectedToppingAmount}
        />
        <SubmitButton 
          onSubmit={this.onSubmit} 
        />
      </form>
    );
  }
}

export default PizzaCreator;
