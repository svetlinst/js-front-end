function solve(arr) {
    [occ, ...words] = arr;
    let lookups = occ.split(' ');
    let result = {};

    for (x of lookups) {
        result[x] = 0;
    }

    words.forEach(x => {
        if (result.hasOwnProperty(x)) {
            result[x] += 1;
        }
    })

    let sorted = Object.keys(result).map(key => [key, result[key]]);
    sorted.sort((x, y) => y[1]-x[1]);

    sorted.forEach(x => console.log(`${x[0]} - ${x[1]}`));
}

solve(
    [
        'this sentence', 
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
        ]
        
)