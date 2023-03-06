function solve(arr) {
    let employees = {};

    for (el of arr) {
        employees[el] = el.length;
    }

    for (el in employees) {
        console.log(`Name: ${el} -- Personal Number: ${employees[el]}`)
    }

}

solve([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
]);
