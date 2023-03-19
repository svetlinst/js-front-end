function focused() {
    const inputElements = document.querySelectorAll('input');

    const highlightActive = function(e) {
        e.target.parentElement.classList.add('focused');
    }

    const removeHighlight = function(e) {
        e.target.parentElement.classList.remove('focused');
    }

    for (const el of inputElements) {
        el.addEventListener('focus', highlightActive);
        el.addEventListener('blur', removeHighlight);
    }
}