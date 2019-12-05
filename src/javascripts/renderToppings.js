import { renderTopping } from "./renderTopping";
import Anchovy from '../assets/toppings/anchovy.svg';

export class Toppings {
  constructor() {
    this.root = document.createElement('div');

    this.state = {
      toppings: [{
        name: 'Anchovy',
        srcImg: Anchovy, 
        price: 0.99,
      }, {
        name: 'Bacon',
        srcImg: './assets/toppings/bacon.svg', 
        price: 0.99,
      }, {
        name: 'Chili',
        srcImg: './assets/toppings/chili.svg', 
        price: 0.99,
      }, {
        name: 'Basil',
        srcImg: './assets/toppings/basil.svg', 
        price: 0.99,
      }, {
        name: 'Mozzarella',
        srcImg: './assets/toppings/mozzarella.svg', 
        price: 0.99,
      }, {
        name: 'Mushroom',
        srcImg: './assets/toppings/mushroom.svg', 
        price: 0.99,
      }, {
        name: 'Olive',
        srcImg: './assets/toppings/olive.svg', 
        price: 0.99,
      }, {
        name: 'Onion',
        srcImg: './assets/toppings/onion.svg', 
        price: 0.99,
      }, {
        name: 'Pepper',
        srcImg: './assets/toppings/pepper.svg', 
        price: 0.99,
      }, {
        name: 'Pepperoni',
        srcImg: './assets/toppings/pepperoni.svg', 
        price: 0.99,
      }, {
        name: 'Peppers',
        srcImg: './assets/toppings/peppers.svg', 
        price: 0.99,
      }, {
        name: 'Sweetcorn',
        srcImg: './assets/toppings/sweetcorn.svg', 
        price: 0.99,
      }],
      selectedToppingNames: ['Pepper'],
    }; 
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    }

    this._render();
  }

  _render() {
    this.root.innerHTML = null;
    const r = this.render();

    this.root.append(r);

    return this.root;
  }

  deactivateTopping({ name }) {
    const { selectedToppingNames } = this.state;
    const newSelectedToppingNames = selectedToppingNames.filter(thisName => thisName !== name);
    this.setState({
      selectedToppingNames: newSelectedToppingNames,
    });
  }

  activateTopping({ name }) {
    const { selectedToppingNames } = this.state;
    const newSelectedToppingNames = [...selectedToppingNames, name];
    this.setState({
      selectedToppingNames: newSelectedToppingNames,
    });
  }

  onToppingDivClick(topping) {
    const { name } = topping;
    const { selectedToppingNames } = this.state;
    const activated = selectedToppingNames.includes(name);
  
    if (activated) {
      this.deactivateTopping(topping);
      return;
    }    
  
    this.activateTopping(topping);
  }

  render() {
    const { toppings, selectedToppingNames } = this.state;

    const toppingsDiv = document.createElement('div');
    toppingsDiv.classList.add('toppings__container');
  
    function getToppingDiv(topping) {
      const { name } = topping;
      const activated = selectedToppingNames.includes(name);
  
      return renderTopping({ topping, activated, onClick: this.onToppingDivClick.bind(this) });
    }
  
    const toppingDivs = toppings.map(getToppingDiv.bind(this))
  
    toppingsDiv.append(...toppingDivs);

    return toppingsDiv;
  }

  static render() {
    const toppings = new Toppings();

    return toppings._render();
  }
}
