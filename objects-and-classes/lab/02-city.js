function solve(city) {
    for (key in city) {
        console.log(`${key} -> ${city[key]}`)
    }
}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)