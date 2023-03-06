function solve(text) {
    let words = {};
    for (x of text.split(' ')){
        let lower = x.toLowerCase();
        if (words.hasOwnProperty(lower)) {
            words[lower] += 1;
        } else {
            words[lower] = 1;
        }
    }

    let odd = Object.fromEntries(Object.entries(words).filter(([k, v]) => v % 2 == 1));

    console.log(Object.keys(odd).join(' '))
}

solve(
    'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
)