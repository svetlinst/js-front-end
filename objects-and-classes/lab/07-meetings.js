function solve(arr) {
    let meetings = {};

    for (el of arr) {
        [day, firstName] = el.split(" ");
        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = firstName;
            console.log(`Scheduled for ${day}`);
        }
    }

    Object.entries(meetings).forEach((key) => {
        console.log(`${key[0]} -> ${key[1]}`);
    });
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)