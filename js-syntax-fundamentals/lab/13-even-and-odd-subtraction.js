function solve(arr) {
    let odd = 0;
    let even = 0;
    arr.forEach((v, i) => {
        if (v % 2 == 0) {
            even += v;
        } else {
            odd += v;
        }
    });

    console.log(even - odd);
}

solve([1,2,3,4,5,6])
solve([3,5,7,9])
solve([2,4,6,8,10])