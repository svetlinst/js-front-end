

function solve(text, word) {
    let newText = text.replace(word, repeat(word));
    while (newText.includes(word)) {
        newText = newText.replace(word, repeat(word));
    }
    console.log(newText);

    function repeat (w) {
        return '*'.repeat(w.length);
    }
}

solve('A small sentence with some words small', 'small')
solve('Find the hidden word', 'hidden')