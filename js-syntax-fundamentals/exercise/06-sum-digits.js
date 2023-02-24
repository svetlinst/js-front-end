function solve(num) {
    let sum = 0;
    for (n of num.toString()) {
        sum += Number(n);
    }
    console.log(sum)
}

solve(245678)