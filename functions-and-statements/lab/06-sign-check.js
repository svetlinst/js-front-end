function solve(...arr) {
    let negatives = 0;
    arr.forEach(x => {
        if (x < 0) {
            negatives +=1;
        }
    })

    if (negatives % 2 == 0) {
        console.log('Positive');
    } else {
        console.log('Negative')
    }
}

solve(5, -12, -15)