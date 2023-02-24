function solve(fruit, weight, price) {
    const weightKng = weight / 1000;
    console.log(`I need $${(weightKng * price).toFixed(2)} to buy ${weightKng.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80)