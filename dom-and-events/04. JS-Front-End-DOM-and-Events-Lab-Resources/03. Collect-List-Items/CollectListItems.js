function extractText() {
    const listElements = document.querySelectorAll('ul#items li');
    const resultElement = document.getElementById('result');

    for (el of listElements) {
        resultElement.textContent += el.textContent;
    }
}