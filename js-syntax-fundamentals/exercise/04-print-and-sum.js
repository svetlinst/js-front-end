function solve(start, end) {
    let arr = [];
    for (i=start; i<=end; i++){
        arr.push(i);
    }

    let total = arr.reduce((v, a) => v+a, 0);
    console.log(arr.join(' '));
    console.log(`Sum: ${total}`)
    
}

solve(0, 26)