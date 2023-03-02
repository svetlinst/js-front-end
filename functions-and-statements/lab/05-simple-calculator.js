function solve (num1, num2, op) {
    const opMapper = {
        'add': (n, m) => n+m,
        'subtract': (n, m) => n-m,
        'multiply': (n, m) => n*m,
        'divide': (n,m) => n/m
    }

    return opMapper[op](num1, num2);
}

console.log(solve(5, 5, 'multiply'))