function problem(n1, n2) {
    function solve(num) {
        if (num < 0) {
            return -1;
        } else if (num ==0) {
            return 1;
        } else {
            return (num * solve(num-1));
        }
    }
    let first = solve(n1);
    let second = solve(n2)
    console.log(`${(first / second).toFixed(2)}`);
}


problem(6,2)