function solve(arr) {
    let movies = [];

    for (el of arr) {
        [first, ...rest] = el.split(" ");
        if (first === "addMovie") {
            movies.push({ name: el.substring(el.indexOf(' ')+1)});
            continue;
        }


        let tokens = [];
        let action;
        if (el.indexOf('directedBy') > 0) {
            tokens = el.split(' directedBy ');
            action = 'director';
        } else if (el.indexOf('onDate') > 0) {
            tokens = el.split(' onDate ');
            action = 'date';
        }
        

        let movie = movies.find(x => {
            return x.name === tokens[0];
        });

        if (movie) {
            movie[action] = tokens[1];
        }
    }

    movies = movies.filter(x => x.hasOwnProperty('director') && x.hasOwnProperty('date'));

    movies.forEach(x => console.log(JSON.stringify(x)))
}

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    );
