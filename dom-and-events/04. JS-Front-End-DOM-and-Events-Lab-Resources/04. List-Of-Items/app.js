function addItem() {
    const ulElement = document.getElementById('items');
    const textElement = document.getElementById('newItemText');

    const newLiItem = document.createElement('li');
    newLiItem.textContent = textElement.value;

    ulElement.appendChild(newLiItem);
    textElement.value = null;
}