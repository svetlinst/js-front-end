

function solve(ppl, group, day) {
    const mapper = {
        'Students': {
            'Friday': 8.45,
            'Saturday': 9.8,
            'Sunday': 10.46
        },
        'Business': {
            'Friday': 10.9,
            'Saturday': 15.6,
            'Sunday': 16
        },
        'Regular': {
            'Friday': 15,
            'Saturday': 20,
            'Sunday': 22.5
        },
    }

    const discounts = {
        'Students': (size, price) => {
            if (size >= 30) {
                return price * size * (1 - 0.15);
            }
            return price * size;
        },
        'Business': (size, price) => {
            if (size >=100) {
                return (size - 10) * price;
            }
            return price * size;
        },
        'Regular': (size, price) => {
            if (size >= 10 && size <= 20) {
                return price * size * (1 - 0.05);
            }
            return price*size;
        },
    }

    const price = mapper[group][day];
    const cost = discounts[group](ppl, price)
    
    console.log(`Total price: ${cost.toFixed(2)}`);
}

solve(30,
    "Students",
    "Sunday"
    )