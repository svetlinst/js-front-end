function solve(stock, deliveries) {
    let products = {};

    for (i=0; i < stock.length; i+=2) {
        products[stock[i]] = Number(stock[i+1]);
    }

    for (i=0; i < deliveries.length; i+=2) {
        if (products.hasOwnProperty(deliveries[i])) {
            products[deliveries[i]] += Number(deliveries[i+1]);
        } else {
            products[deliveries[i]] = Number(deliveries[i+1]);
        }
    }

    
    Object.entries(products).forEach(x => console.log(`${x[0]} -> ${x[1]}`));
}


solve(
        [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
        ],
        [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
        ]
        
)