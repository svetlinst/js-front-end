function solve(n1, n2, n3) {
    function sum(s1, s2) {
        return s1+s2;
    }

    function subtract (a, b) {
        return a-b;
    }

    return subtract(sum(n1, n2), n3);
}

console.log(solve(23, 5, 10))