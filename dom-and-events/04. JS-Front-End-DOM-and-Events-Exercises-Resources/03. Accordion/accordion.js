function toggle() {
    const spanElement = document.querySelector('span');
    const textElement = document.getElementById('extra');

    if (spanElement.textContent == 'More'){
        spanElement.textContent = 'Less';
        textElement.style.display = 'block';
    } else {
        spanElement.textContent = 'More';
        textElement.style.display = 'none';
    }
}