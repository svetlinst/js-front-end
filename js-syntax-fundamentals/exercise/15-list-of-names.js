function solve(arr) {
    let newArr = arr.sort((a, b)=> a.localeCompare(b));
    newArr.forEach((e, i) => {
        console.log(`${i+1}.${e}`);
    })
}

solve(["John", "Bob", "Christina", "Ema"])