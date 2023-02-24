function solve(num, ...params) {
    const mapper = {
        'chop': (num) => { return num/2 },
        'dice': (num) => { return Math.sqrt(num) },
        'spice': (num) => { return num + 1 },
        'bake': (num) => { return num * 3 },
        'fillet': (num) => { return num - 0.2 * num }
    }
    let result = num;
    params.forEach(p => {
        result = mapper[p](result);
        console.log(result);
    })
}

// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')