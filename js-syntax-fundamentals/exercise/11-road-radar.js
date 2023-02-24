
function solve(speed, place){
    let spd = Number(speed);
    let speedLimit = 0;
    switch(place) {
        case 'residential':
            speedLimit = 20;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'motorway':
            speedLimit = 130;
            break;
    }

    if (spd > speedLimit) {
        let diff = spd - speedLimit;
        let severity = '';
        if (diff <= 20) {
            severity = 'speeding';
        } else if (diff > 20 && diff <= 40) {
            severity = 'excessive speeding';
        } else if (diff > 40) {
            severity = 'reckless driving'
        }

        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${severity}`);
    } else {
        console.log(`Driving ${spd} km/h in a ${speedLimit} zone`);
    }
}

solve(21, 'residential')