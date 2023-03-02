function solve(num) {
    const arr = Array.from(num.toString(), x => Number(x));
    let odd = 0;
    let even = 0;
    arr.forEach(e => {
        if (e % 2 ==0) {
            even += e;
        } else {
            odd += e;
        }
    })
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}


solve(1000435)