function solve(arr) {
    function isPalindrome(num) {
        let arr = Array.from(num.toString(), x => Number(x));
        let palindrome = true;
        while (arr.length > 0) {
            const el1 = arr.shift();
            if (arr.length>0) {
                const el2 = arr.pop();
                if (el2 !== el1) {
                    palindrome = false;
                }
            }
        }
        return palindrome;
    } 

    arr.forEach(x => console.log(isPalindrome(x)));
}

solve([123,323,421,121])