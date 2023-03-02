function solve(ch1, ch2) {
    let ch1Num = ch1.charCodeAt();
    let ch2Num = ch2.charCodeAt();
    let start = Math.min(ch1Num, ch2Num);
    let end = Math.max(ch1Num, ch2Num);
    let result = [];
    for (i=start+1; i<end; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(' '));
}

solve('#',
':'
)