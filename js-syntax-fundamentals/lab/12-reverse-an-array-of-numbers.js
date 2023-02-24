function solve(n, arr) {
    let newArr = arr.slice(0, n);
    newArr.reverse();
    console.log(newArr.join(' '));
}

solve(3, [10, 20, 30, 40, 50])