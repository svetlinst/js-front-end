function solve(age) {
    const val = Number(age)
    if (val >=0 && val <=2) {
        console.log('baby');
    } else if (val > 2 && val <=13) {
        console.log('child');
    } else if (val >13 && val <=19) {
        console.log('teenager')
    } else if (val > 19 && val <=65) {
        console.log('adult')
    } else if (val >= 66) {
        console.log('elder');
    } else {
        console.log('out of bounds');
    }
    
}

solve(-1)