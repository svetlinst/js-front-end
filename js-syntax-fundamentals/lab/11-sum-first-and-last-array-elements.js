function solve(arr) {
    let first = arr.shift();
    let last = arr.pop();
    console.log(first + last);
}

solve([20, 30, 40])
solve([10, 17, 22, 33])