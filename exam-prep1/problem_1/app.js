function solve(arr) {
    const num = Number(arr[0]);
    const pieces = arr.slice(1,num+1);
    const commands = arr.slice(num+1, arr.length-1)

    const obj = {}

    pieces.forEach(x => {
        [piece, composer, key] = x.split('|');
        obj[piece] = {composer, key};
    })

    for (const cmd of commands) {
        [action, ...tokens] = cmd.split('|');
        if (action === 'Add') {
            [piece, composer, key] = tokens;
            if (obj.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
                continue;
            }
            obj[piece] = {composer, key};
            console.log(`${piece} by ${composer} in ${key} added to the collection!`)
        }

        if (action === 'Remove') {
            const piece = tokens[0];
            if (!obj.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                continue;
            }
            delete obj[piece];
            console.log(`Successfully removed ${piece}!`)
        }

        if (action === 'ChangeKey') {
            [piece, key] = tokens;
            if (!obj.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                continue;
            }
            obj[piece] = {'composer': obj[piece].composer, key};
            console.log(`Changed the key of ${piece} to ${key}!`);
        }
    }

    for (const key in obj) {
        console.log(`${key} -> Composer: ${obj[key].composer}, Key: ${obj[key].key}`)
    }
}

solve([
    "3",
    "Fur Elise|Beethoven|A Minor",
    "Moonlight Sonata|Beethoven|C# Minor",
    "Clair de Lune|Debussy|C# Minor",
    "Add|Sonata No.2|Chopin|B Minor",
    "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
    "Add|Fur Elise|Beethoven|C# Minor",
    "Remove|Clair de Lune",
    "ChangeKey|Moonlight Sonata|C# Major",
    "Stop",
]);
