export default function getToppingByName(name, toppings) {
  return toppings.find(topping => {
    const { name: thisName } = topping;

    return name === thisName;
  });
}