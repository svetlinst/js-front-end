function addItem() {
    const ddElement = document.querySelector('#menu');
    const text = document.querySelector('#newItemText').value;
    const val = document.querySelector('#newItemValue').value;

    const newDdElement = document.createElement('option');
    newDdElement.value = val;
    newDdElement.textContent = text;
    ddElement.appendChild(newDdElement);
    document.querySelector('#newItemText').value = null;
    document.querySelector('#newItemValue').value = null;
}