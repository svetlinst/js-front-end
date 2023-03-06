function solve(name, lastName, hairColor) {
    return console.log(JSON.stringify(
        {
            name,
            lastName,
            hairColor
        }
    ))
}

solve('George', 'Jones', 'Brown')