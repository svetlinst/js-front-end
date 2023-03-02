function solve(num) {
    let divisors = [];
    for (i=1; i<num; i++) {
        if (num % i == 0) {
            divisors.push(i);
        }
    }
    let divSum = divisors.reduce((a, v) => a+=v, 0);
    if (num === divSum) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}

solve(28)