function solve(arr) {
    let addressBook = {};

    for (el of arr) {
        [name, address] = el.split(':');
        addressBook[name] = address;
    }

    let sorted = Object.entries(addressBook).sort((a, b) => {
        return a[0].localeCompare(b[0]);
    })

    for (el of sorted) {
        console.log(`${el[0]} -> ${el[1]}`)
    }
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)