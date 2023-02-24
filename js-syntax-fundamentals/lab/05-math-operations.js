


function solve (num1, num2, op) {
    const functionMapper = {
        '+': (a, b) => a +b,
        '-': (a, b) => a-b,
        '*': (a, b) => a*b,
        '/': (a, b) => a/b,
        '%': (a, b) => a%b,
        '**': (a, b) => a**b,
    }
    console.log(functionMapper[op](num1, num2));
}

solve(3, 6, '-')