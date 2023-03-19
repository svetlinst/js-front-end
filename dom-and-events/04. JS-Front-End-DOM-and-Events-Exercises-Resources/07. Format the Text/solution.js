function solve() {
  const outputElement = document.getElementById('output');
  const inputElement = document.getElementById('input');

  const sentances = inputElement.value.split('.').filter(x => x !== '');

  while (sentances.length > 0) {
    const currentText = sentances.splice(0, 3).join('. ') + '.';
    const pElement = document.createElement('p');
    pElement.textContent = currentText;
    outputElement.appendChild(pElement);
  }
}