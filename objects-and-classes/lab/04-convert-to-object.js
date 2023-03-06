function solve (obj) {
    let converted = JSON.parse(obj);
    for (key in converted) {
        console.log(`${key}: ${converted[key]}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')