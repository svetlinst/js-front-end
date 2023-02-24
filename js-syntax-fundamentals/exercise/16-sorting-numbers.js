function solve(arr) {
    const sorted = arr.sort((a, b) => a-b);
    let newArr = [];
    while (sorted.length > 0) {
        newArr.push(sorted.shift());
        if (sorted.length > 0) {
            newArr.push(sorted.pop());
        }
    }
    return newArr
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))