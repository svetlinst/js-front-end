function solve(pct) {
    if (pct !== 100) {
        console.log(
            `${pct}% [${"%".repeat(pct / 10)}${".".repeat(10 - pct / 10)}]`
        );
        console.log('Still loading...')
    } else {
        console.log('100% Complete!');
    }
}

solve(100);
