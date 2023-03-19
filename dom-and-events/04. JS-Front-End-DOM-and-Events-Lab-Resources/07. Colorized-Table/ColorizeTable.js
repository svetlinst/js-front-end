function colorize() {
    const rowElements = document.querySelectorAll('table tr:nth-of-type(2n)');
    for (const row of rowElements) {
         row.style.background = 'teal';
    }

}