function solve(num) {
    const arr = Array.from(num.toString(), x=> Number(x));
    const first = arr[0];
    let same = true;

    for (e of arr) {
        if (e !== first) {
            same = false;
            break;
        }
    }

    console.log(same);
    console.log(arr.reduce((v, a) =>v+a, 0));
}

solve(2222222)