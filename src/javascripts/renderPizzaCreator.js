import { renderChooseYourToppings } from './renderChooseYourToppings';

export function renderPizzaCreator() {
  const pizzaCreatorDiv = document.createElement('div');
  pizzaCreatorDiv.classList.add('pizza-creator-app');

  const chooseYourToppings = renderChooseYourToppings();

  pizzaCreatorDiv.append(chooseYourToppings);

  return pizzaCreatorDiv;
}