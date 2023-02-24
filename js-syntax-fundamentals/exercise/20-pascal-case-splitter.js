function solve(text) {
    const regEx = RegExp('[A-Z]{1}[a-z]*', 'g');
    const arr = text.match(regEx);
    console.log(arr.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')