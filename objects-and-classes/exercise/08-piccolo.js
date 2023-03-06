function solve(arr) {
    let parking = {};

    for (i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(", ");
        let direction = tokens[0];
        let car = tokens[1];

        if (parking.hasOwnProperty(car) && direction === "OUT") {
            delete parking[car];
        } else if (!parking.hasOwnProperty(car) && direction !== "OUT") {
            parking[car] = undefined;
        }
    }

    let sorted = Object.keys(parking);
    sorted.sort((a, b) => a.localeCompare(b));

    if (sorted.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        console.log(sorted.join('\n'));
    }
}

solve([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "IN, CA9999TT",
    "IN, CA2866HI",
    "OUT, CA1234TA",
    "IN, CA2844AA",
    "OUT, CA2866HI",
    "IN, CA9876HH",
    "IN, CA2822UU",
]);

// solve(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
