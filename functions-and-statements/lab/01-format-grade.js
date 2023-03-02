function solve(grade) {
    let result;
    if (grade <3) {
        result = 'Fail (2)';
    }  else if (grade >= 3 && grade < 3.5) {
        result = `Poor (${grade.toFixed(2)})`;
    } else if (grade >= 3.5 && grade < 4.5) {
        result = `Good (${grade.toFixed(2)})`;
    } else if (grade >= 4.5 && grade < 5.5) {
        result = `Very good (${grade.toFixed(2)})`;
    } else if (grade >= 5.5) {
        result = `Excellent (${grade.toFixed(2)})`;
    }
    if (result) {
        console.log(result)
    }
}

console.log(solve(2.99))