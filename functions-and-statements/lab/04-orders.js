function solve(product, qty) {
    const prodMap = {
        'coffee': 1.5,
        'water': 1,
        'coke': 1.4,
        'snacks': 2
    }

    return `${(prodMap[product] * qty).toFixed(2)}`;
}

console.log(solve('water', 5))