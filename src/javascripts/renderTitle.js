export function renderTitle({ title }) {
  const titleH2 = document.createElement('h2');
  titleH2.innerText = title;

  return titleH2;
}