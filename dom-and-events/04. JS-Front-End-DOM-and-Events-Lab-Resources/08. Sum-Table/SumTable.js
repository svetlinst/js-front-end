function sumTable() {
    const tdElements = document.querySelectorAll('tbody tr td:nth-of-type(2n)');
    const resultElement = document.querySelector('tbody tr:last-child td:last-child');
    let result = 0;
    for (const td of tdElements) {
        result += Number(td.textContent);
    }
    resultElement.textContent = result;
}