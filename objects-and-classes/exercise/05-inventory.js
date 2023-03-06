function solve(arr) {
    let heroes = [];

    for (el of arr) {
        [name, level, items] = el.split(" / ");
        let hero = {
            name,
            'level': Number(level),
            items: items.split(", "),
        };
        heroes.push(hero);
    }

    heroes.sort((a, b) => {
        return a.level - b.level;
    });

    heroes.forEach(x => {
        console.log(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.items.join(', ')}`)
    })
}

solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);
