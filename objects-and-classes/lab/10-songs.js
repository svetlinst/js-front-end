function solve(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList,
            this.name = name,
            this.time = time
        }
    }

    [n, ...songs] = arr;
    let fav = songs.pop();


    let allSongs = [];
    for (el of songs) {
        [list, name, time] = el.split('_');
        const song = new Song(list, name, time);
        allSongs.push(song);
    }

    if (fav ==='all') {
        allSongs.forEach(x => console.log(x.name));
    } else {
        allSongs.filter(x => x.typeList == fav).forEach(x => console.log(x.name))
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    
    )