function solve(word, start, count) {
    let result = word.substring(start, start + count);
    console.log(result);
}

solve('ASentence dasd ad a a', 1, 8)
solve('SkipWord', 4, 7)