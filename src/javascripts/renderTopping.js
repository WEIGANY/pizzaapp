export function renderTopping({ topping, activated, onClick }) {
  const { srcImg, name } = topping;

  const toppingDiv = document.createElement('div');
  toppingDiv.classList.add('topping');
  toppingDiv.onclick = () => onClick(topping);

  const toppingImg = document.createElement('img');
  toppingImg.src = srcImg;
  toppingImg.alt = name;

  const nameSpan = document.createElement('span');
  nameSpan.innerText = name;
  
  function setActive() {
    toppingDiv.classList.add('topping--active');
  }

  if (activated) {
    setActive();
  }

  toppingDiv.append(toppingImg, nameSpan);

  return toppingDiv;
}