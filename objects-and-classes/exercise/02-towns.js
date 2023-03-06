function solve(arr) {
    let towns = [];

    for (el of arr) {
        [name, lat, lon]  = el.split(' | ');
        towns.push({
            'town': name,
            'latitude': Number(lat).toFixed(2).toString(),
            'longitude': Number(lon).toFixed(2).toString(),
        })
    }

    towns.forEach(x => console.log(x));
}

solve(
    ['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']

)