function deleteByEmail() {
    const tableRowsElements = document.querySelectorAll(
        "tbody tr td:nth-child(2)"
    );
    const allRows = document.querySelectorAll("tbody");
    console.log(tableRowsElements);
    const lookup = document.getElementsByName("email")[0].value;
    const resultElement = document.getElementById("result");

    for (let el of tableRowsElements) {
        if (el.textContent == lookup) {
            const row = el.parentNode;
            row.parentNode.removeChild(row);
            resultElement.textContent = "Deleted.";
            return;
        }
    }

    resultElement.textContent = "Not found.";
}
