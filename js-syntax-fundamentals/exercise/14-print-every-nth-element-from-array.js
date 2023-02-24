function solve(arr, step) {
    let newArr = [];
    for (i=0; i<arr.length; i+=step) {
        newArr.push(arr[i]);
    }

    return newArr;
}

solve(['1', 
'2',
'3', 
'4', 
'5'], 
6

)