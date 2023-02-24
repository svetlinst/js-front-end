function solve(words, text) {
    const wordsArr = words.split(', ').sort((a, b) => b.length - a.length);
    let newText = text;
    for (word of wordsArr) {
        const lookup = '*'.repeat(word.length);
        while (newText.indexOf(lookup) > 0) {
            newText = newText.replace(lookup, word);
        }
    }   
    console.log(newText);
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)

solve('great',
'softuni is ***** place for learning new programming languages'
)