function sovle(arg) {
    if (typeof arg === 'number') {
        console.log(`${(Math.PI * Math.pow(arg,2)).toFixed(2)}`);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof arg}.`)
    }
}

sovle(5)

sovle('name')