function addItem() {
    const ulElement = document.getElementById("items");
    const textElement = document.getElementById("newItemText");

    const newLiItem = document.createElement("li");
    newLiItem.textContent = textElement.value;

    const aElement = document.createElement("a");
    aElement.textContent = "[Delete]";
    aElement.href = "#";
    newLiItem.appendChild(aElement);

    const deleteElementFunction = function (e) {
        e.target.parentElement.remove();
    };

    aElement.addEventListener("click", deleteElementFunction);

    ulElement.appendChild(newLiItem);
    textElement.value = null;
}
