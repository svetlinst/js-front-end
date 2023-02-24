function solve (word, text) {
    let isFound = false;
    for (w of text.split(' ')) {
        if (w.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            isFound = true;
            break;
        }
    }
    if (!isFound) {
        console.log(`${word} not found!`)
    }
}

solve('python',
'JavaScript is the best programming language'

)