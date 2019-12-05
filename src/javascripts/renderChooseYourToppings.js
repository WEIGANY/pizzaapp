import { renderTitle } from "./renderTitle";
import { Toppings } from "./renderToppings";

export function renderChooseYourToppings() {
  const chooseYourToppingsSection = document.createElement('section');
  chooseYourToppingsSection.classList.add('section', 'toppings');

  const chooseYourToppingsTitle = renderTitle({ title: 'Choose Your Toppings' });
  const chooseYourToppingsToppings = Toppings.render();

  chooseYourToppingsSection.append(chooseYourToppingsTitle, chooseYourToppingsToppings);

  return chooseYourToppingsSection;
}
