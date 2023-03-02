function solve(num) {
    for (i=0; i<num; i++) {
        console.log(Array(num).fill(num).join(' '));
    }
}

solve(12)