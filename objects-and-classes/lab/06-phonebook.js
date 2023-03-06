function solve(arr) {
    let phonebook = {};

    for (el of arr) {
        [firstName, phone] = el.split(' ');
        phonebook[firstName] = phone;
    }

    for (key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)
