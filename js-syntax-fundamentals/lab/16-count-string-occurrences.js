function solve(text, word) {
    let arr = text.split(' ');
    let counter = 0;
    arr.forEach((v, i) => {
        if (v === word) {
            counter++;
        }
    });
    console.log(counter);
}

solve('This is a word and it also is a sentence',
'is'
)

solve('softuni is great place for learning new programming languages',
'softuni'
)