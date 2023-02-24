function solve(text) {
    const regex1 = RegExp('#[a-zA-Z]+', 'g');
    // const arr = [...text.matchAll(regex1)];
    let arr = text.match(regex1)
    arr = arr.forEach(e => {
        console.log(e.replace('#', ''))
    })

}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign')


